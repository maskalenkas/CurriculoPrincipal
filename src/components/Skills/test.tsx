import '../../../setupTests'
import { getByPlaceholderText, getByRole, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import { CypressWrapper, IconWrapper } from './styles'

import { mock1, mock2 } from './mock'

import Skills from '.'

describe('<Skills />', () => {
  it('Vai testar se todos os componentes estão sendo renderizados', () => {
    const { container, debug } = renderWithTheme(<Skills items={mock1} />)

    // Verificando se tem 13 elementos no array de icones
    expect(screen.getAllByTitle(/icon/i)).toHaveLength(13)

    // VErificando se esta renderizando o componente
    expect(screen.getByTitle(/icon cypress/i)).toBeInTheDocument()

    // Verificando se esta renderiando o nome em baixo do icone
    expect(screen.getByText(/Cypress/i)).toBeInTheDocument()

    // Verificando se o titulo do componente esta sendo renderizado
    expect(screen.getByText(/tecnologias/i)).toBeInTheDocument()
  })
})
