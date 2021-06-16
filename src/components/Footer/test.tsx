import { render, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Footer from '.'

describe('<Footer />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Footer />)

    // renderiza o footer
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    // Renderiza os icones
    expect(screen.getByTitle(/Xicara de café/i)).toBeInTheDocument()
    expect(screen.getByTitle(/coração em forma de amor/i)).toBeInTheDocument()
  })
})
