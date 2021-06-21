import '../../../setupTests'
import { render, screen } from '@testing-library/react'

import { HardSkills } from './mock'

import SkillContainer from '.'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<SkillContainer />', () => {
  it('veirifica se esta renderizando tudo', () => {
    const { container } = renderWithTheme(
      <SkillContainer items={HardSkills} title="teste" />,
    )

    // Verificando se foi renderizado
    expect(screen.getByText(/testes unitarios/i)).toBeInTheDocument()

    // Verificando se o titulo foi renderizado
    expect(screen.getByText('teste')).toBeInTheDocument()

    // Verificando se tem 7 elementos no array
    expect(screen.getAllByTitle(/icon checked/i)).toHaveLength(7)
  })
})
