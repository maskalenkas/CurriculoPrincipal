import '../../../setupTests'

import { render, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Home from '.'

jest.mock('components/BannerSlider', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="mock-bannerSlider"></div>
    },
  }
})

describe('<Main />', () => {
  it('deve renderizar as sessões', () => {
    renderWithTheme(<Home />)

    expect(screen.getByTestId('mock-bannerSlider')).toBeInTheDocument()
  })
})
