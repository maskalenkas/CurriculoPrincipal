import '../../../setupTests'

import { render, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Home from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Home />)
  })

  it('deve renderizar as sessões', () => {
    const { container } = renderWithTheme(<Home />)

    expect(
      screen.getByRole('heading', { name: /meus projetos/i }),
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Minhas habilidades/i }),
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: 'Contato' })).toBeInTheDocument()
  })
})
