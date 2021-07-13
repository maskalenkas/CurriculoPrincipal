import { getByText, render, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import ContainerSkill from '.'

describe('<ContainerSkill />', () => {
  it('vai renderizar o container', () => {
    const { debug } = renderWithTheme(
      <ContainerSkill title="titulo 1">filho</ContainerSkill>,
    )

    debug()
    expect(screen.getByText(/titulo 1/i)).toBeInTheDocument()
    expect(screen.getByText(/filho/i)).toBeInTheDocument()
  })
})
