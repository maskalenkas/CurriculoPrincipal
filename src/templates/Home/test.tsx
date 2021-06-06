import '../../../setupTests'

import { render, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Home from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Home />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the colors correctly', () => {
    const { container } = renderWithTheme(<Home />)

    expect(container.firstChild).toHaveStyle({ 'background-color': '#efefef' })
  })
})
