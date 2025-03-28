import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Input from '@/components/ui/Input'
import { useFormStatus } from 'react-dom'

jest.mock('react-dom', () => ({
  ...jest.requireActual('react-dom'),
  useFormStatus: jest.fn(),
}))

describe('Input Component', () => {
  const renderInput = (pending: boolean, setSearchInput: jest.Mock) => {
    const mockUseFormStatus = useFormStatus as jest.Mock
    mockUseFormStatus.mockReturnValue({ pending })

    render(
      <Input
        id="keywords"
        name="keywords"
        placeholder="Enter job title or keywords"
        searchInput={''}
        setSearchInput={setSearchInput} // Pass the mock function here
      />
    )
  }

  it('renders the input component', () => {
    const setSearchInput = jest.fn() // Mock the setSearchInput function
    renderInput(false, setSearchInput)
    const inputElement = screen.getByPlaceholderText(
      'Enter job title or keywords'
    )
    expect(inputElement).toBeInTheDocument()
    expect(inputElement).not.toBeDisabled()
  })

  it('expects onChange function to be called', async () => {
    const setSearchInput = jest.fn()
    renderInput(false, setSearchInput)
    const inputElement = screen.getByPlaceholderText(
      'Enter job title or keywords'
    ) as HTMLInputElement

    const user = userEvent.setup()
    await user.type(inputElement, 'software engineer')

    expect(setSearchInput).toHaveBeenCalledTimes(17)
    expect(setSearchInput).toHaveBeenCalledWith(expect.any(Function))
  })
})
