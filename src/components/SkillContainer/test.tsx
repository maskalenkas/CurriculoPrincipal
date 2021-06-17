import '../../../setupTests'
import { render, screen } from '@testing-library/react'

import { SoftSkills } from './mock'

import SkillContainer from '.'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<SkillContainer />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(
      <SkillContainer items={SoftSkills} title="teste" />,
    )

    expect(screen.getByRole('heading', { name: /teste/i })).toBeInTheDocument()
  })
})
