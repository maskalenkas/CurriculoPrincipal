import { render, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Skills from '.'

describe('<Skills />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Skills />)
  })
})
