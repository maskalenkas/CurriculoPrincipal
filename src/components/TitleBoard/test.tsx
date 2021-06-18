import { render, screen } from '@testing-library/react'

import TitleBoard from '.'

describe('<TitleBoard />', () => {
  it('should render the heading', () => {
    const { container } = render(<TitleBoard title="testando" />)

    expect(
      screen.getByRole('heading', { name: /TitleBoard/i }),
    ).toBeInTheDocument()
  })
})
