import { getByPlaceholderText, getByRole, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import { CypressWrapper, IconWrapper } from './styles'

import Skills from '.'
import Heading from 'components/Heading'

describe('<Skills />', () => {
  it('Vai testar se todos os componentes estão sendo renderizados', () => {
    const { container } = renderWithTheme(<Skills />)

    expect(screen.getByLabelText(/icone do javascript/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/icone do html5/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/icone do cypress/i)).toBeInTheDocument()
  })

  it('vai testar se caso tenha um size passado para a prop, o estilo é aplicado', () => {
    const { debug, container } = renderWithTheme(
      <IconWrapper iconSize="15rem">
        <CypressWrapper title="cypress" />
      </IconWrapper>,
    )

    expect(screen.getByRole('img', { name: /cypress/i })).toHaveStyle({
      width: '15rem',
    })
  })
})
