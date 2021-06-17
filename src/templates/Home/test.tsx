import '../../../setupTests'

import { render, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Home from '.'

describe('<Main />', () => {
  it('deve renderizar as sessões', () => {
    const { container } = renderWithTheme(<Home />)

    expect(
      screen.getByRole('heading', { name: /meus projetos/i }),
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /conhecimentos/i }),
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: 'Contato' })).toBeInTheDocument()
  })
})
