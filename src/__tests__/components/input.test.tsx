import { render, screen } from '@testing-library/react'
import Input from '@/components/ui/input'
import { useFormStatus } from 'react-dom'

jest.mock('react-dom', () => ({
  ...jest.requireActual('react-dom'),
  useFormStatus: jest.fn(),
}))

describe('Input Component', () => {
  const renderInput = (pending: boolean) => {
    const mockUseFormStatus = useFormStatus as jest.Mock
    mockUseFormStatus.mockReturnValue({ pending })

    render(
      <Input
        id="keywords"
        name="keywords"
        placeholder="Enter job title or keywords"
        searchInput={''}
        setSearchInput={jest.fn()}
      />
    )
  }

  it('renders the input component', () => {
    renderInput(false)
    const inputElement = screen.getByPlaceholderText(
      'Enter job title or keywords'
    )
    expect(inputElement).toBeInTheDocument()
    expect(inputElement).not.toBeDisabled()
  })

  it('expects input component to be disabled', () => {
    renderInput(true)
    const inputElement = screen.getByPlaceholderText(
      'Enter job title or keywords'
    )
    expect(inputElement).toBeDisabled()
  })
})
