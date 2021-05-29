import { render, screen } from '@testing-library/react'

import AboutMe from '.'

describe('<AboutMe />', () => {
  it('should render the heading', () => {
    const { container } = render(<AboutMe />)

    expect(
      screen.getByRole('heading', { name: /AboutMe/i }),
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
