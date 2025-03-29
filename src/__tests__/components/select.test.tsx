import Select from '@/components/ui/Select'
import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'
import { useFormStatus } from 'react-dom'

jest.mock('react-dom', () => ({
  ...jest.requireActual('react-dom'),
  useFormStatus: jest.fn(),
}))

describe('Select Ui component', () => {
  const renderSelect = (pending: boolean, setSearchInput: jest.Mock) => {
    const MockUseFormStatus = useFormStatus as jest.Mock
    MockUseFormStatus.mockReturnValue({ pending })

    render(
      <Select
        id="jobType"
        name="jobType"
        placeholder="Select job type"
        value=""
        options={[
          { value: 'fullTime', label: 'Full Time' },
          { value: 'partTime', label: 'Part Time' },
          { value: 'contract', label: 'Contract' },
        ]}
        setSearchInput={setSearchInput}
      />
    )
  }

  it('component should render', () => {
    const setSearchInput = jest.fn()
    renderSelect(false, setSearchInput)

    const selectElement = screen.getByRole('combobox')
    expect(selectElement).toBeInTheDocument()
    expect(selectElement).not.toBeDisabled()
  })

  it('should call setSearchInput 3 times for all 3 inputs', async () => {
    const setSearchInput = jest.fn()
    renderSelect(false, setSearchInput)

    const selectElement = screen.getByRole('combobox')

    const user = userEvent.setup()
    await user.selectOptions(selectElement, 'fullTime')
    await user.selectOptions(selectElement, 'partTime')
    await user.selectOptions(selectElement, 'contract')

    expect(setSearchInput).toHaveBeenCalledTimes(3)
    expect(setSearchInput).toHaveBeenCalledWith(expect.any(Function))
  })

  it('component should be disabled when status is pending', () => {
    const setSearchInput = jest.fn()
    renderSelect(true, setSearchInput)

    const selectElement = screen.getByRole('combobox')
    expect(selectElement).toBeDisabled()
  })
})
