import HomeSearch from '@/components/HomePage/homeSearch'
import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'
import { useRouter } from 'next/navigation'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}))

describe('Home Search Form Component', () => {
  const mockPush = jest.fn()
  const renderHomeSearchForm = () => {
    const MockUseRouter = useRouter as jest.Mock
    MockUseRouter.mockReturnValue({ push: mockPush })

    render(<HomeSearch />)
  }

  it('Should render correctly', () => {
    renderHomeSearchForm()
    const input = screen.getByPlaceholderText(/search keyword/i)
    expect(input).toBeInTheDocument()
  })

  it('Form values should be updated properly and router.push should be called with correct values', async () => {
    renderHomeSearchForm()

    const user = userEvent.setup()
    const inputInput = screen.getByPlaceholderText('Search keyword')
    const locationInput = screen.getByPlaceholderText('Location')
    const selectElement = screen.getByRole('combobox')
    const submitButton = screen.getByRole('button', { name: /find job/i })

    await user.type(inputInput, 'Software Engineer')
    await user.type(locationInput, 'London')
    await user.selectOptions(selectElement, 'partTime')

    expect(inputInput).toHaveValue('Software Engineer')
    expect(locationInput).toHaveValue('London')
    expect(selectElement).toHaveValue('partTime')

    await user.click(submitButton)
    expect(mockPush).toHaveBeenCalledWith(
      '/search?keywords=Software%20Engineer&location=London&distance=50&jobType=partTime'
    )
  })
})
