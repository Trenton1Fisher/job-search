import Button from '@/components/ui/button'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useFormStatus } from 'react-dom'

jest.mock('react-dom', () => ({
  ...jest.requireActual('react-dom'),
  useFormStatus: jest.fn(),
}))

describe('Button Ui Component', () => {
  const renderButton = (pending: boolean) => {
    const MockButtonStatus = useFormStatus as jest.Mock
    MockButtonStatus.mockReturnValue({ pending })

    render(<Button />)
  }

  it('should render button component', () => {
    renderButton(false)
    const buttonValue = screen.getByText('Search')
    expect(buttonValue).toBeInTheDocument()
    expect(buttonValue).not.toBeDisabled()
  })

  it('button should be disabled', () => {
    renderButton(true)
    const buttonValue = screen.getByText('Searching')
    expect(buttonValue).toBeDisabled()
  })
})
