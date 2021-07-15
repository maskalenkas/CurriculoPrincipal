import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Footer from '.'

jest.mock('components/IconsWrapper', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="mock-icons"></div>
    },
  }
})

describe('<Footer />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Footer />)

    // renderiza o footer
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    // Renderiza os icones
    expect(screen.getAllByTestId('mock-icons')).toHaveLength(2)
  })
})
