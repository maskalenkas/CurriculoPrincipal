import { getByPlaceholderText, getByRole, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import { CypressWrapper, IconWrapper } from './styles'

import mockItems from './mock'

import Skills from '.'

describe('<Skills />', () => {
  it('Vai testar se todos os componentes estão sendo renderizados', () => {
    const { container } = renderWithTheme(<Skills items={mockItems} />)

    // Verificando se tem 13 elementos no array de icones
    expect(screen.getAllByTitle(/icon/i)).toHaveLength(13)

    // VErificando se esta renderizando o componente
    expect(screen.getByTitle(/icon cypress/i)).toBeInTheDocument()

    // Verificando se esta renderiando o nome em baixo do icone
    expect(screen.getByText(/Cypress/i)).toBeInTheDocument()

    // Verificando se o titulo do componente esta sendo renderizado
    expect(screen.getByText(/tecnologias/i)).toBeInTheDocument()

    // Verificando se o estilo é aplicado
    expect(screen.getByTitle(/icon cypress/i)).toHaveStyle({
      'min-width': '15rem',
      color: '#59595b',
    })
  })
})
