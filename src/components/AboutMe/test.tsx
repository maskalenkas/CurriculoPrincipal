import { render, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import AboutMe from '.'
import mock from './mock'

describe('<AboutMe />', () => {
  it('should render the About-Me', () => {
    const { container, debug } = renderWithTheme(<AboutMe data={mock} />)

    expect(
      screen.getByRole('heading', { name: 'Arthur Maskalenkas' }),
    ).toBeInTheDocument()

    expect(screen.getByAltText(/imagem de perfil/i)).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: 'Web Developer' }),
    ).toBeInTheDocument()

    expect(
      screen.getByLabelText(/Varias colunas com informações sobre o Arthur/i),
    ).toBeInTheDocument()

    // Testando se de fato tem 6 colunas
    expect(container.querySelectorAll('.coluna')).toHaveLength(6)
  })
})
