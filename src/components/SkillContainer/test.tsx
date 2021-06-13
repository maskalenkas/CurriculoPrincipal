import { render, screen } from '@testing-library/react'

import SkillContainer from '.'

describe('<SkillContainer />', () => {
  it('should render the heading', () => {
    const { container } = render(<SkillContainer />)

    expect(
      screen.getByRole('heading', { name: /SkillContainer/i }),
    ).toBeInTheDocument()
  })
})
