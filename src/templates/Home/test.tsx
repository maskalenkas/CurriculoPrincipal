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

jest.mock('components/Skills', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="mock-skills"></div>
    },
  }
})

jest.mock('components/SkillContainer', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="mock-skillcontainer"></div>
    },
  }
})

jest.mock('components/Contact', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="mock-contact"></div>
    },
  }
})

jest.mock('components/Footer', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="mock-footer"></div>
    },
  }
})

describe('<Main />', () => {
  it('deve renderizar as sessões', () => {
    const { debug } = renderWithTheme(<Home />)

    expect(screen.getByTestId('mock-bannerSlider')).toBeInTheDocument()

    // Deve renderizar os conhecimentos
    expect(screen.getByTestId('mock-skills')).toBeInTheDocument()

    // Deve renderizar as 2 colunas de skills
    expect(screen.getAllByTestId('mock-skillcontainer')).toHaveLength(2)

    // Deve renderizar o Contato
    expect(screen.getByTestId('mock-contact')).toBeInTheDocument()

    // Deve renderizar o footer
    expect(screen.getByTestId('mock-footer')).toBeInTheDocument()
  })
})
