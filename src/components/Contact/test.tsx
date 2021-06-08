import { render, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Contact from '.'

describe('<Contact />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Contact />)
  })
})
