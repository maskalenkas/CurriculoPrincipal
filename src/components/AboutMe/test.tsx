import { render, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import AboutMe from '.'
import mock from './mock'

describe('<AboutMe />', () => {
  it('should render the About-Me', () => {
    const { container } = renderWithTheme(<AboutMe />)

    expect(
      screen.getByRole('heading', { name: /meu nome é Arthur Maskalenkas/i }),
    ).toBeInTheDocument()

    expect(screen.getByAltText(/imagem de perfil/i)).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: 'Web Developer' }),
    ).toBeInTheDocument()
  })
})
