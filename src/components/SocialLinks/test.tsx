import { render, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import SocialLinks from '.'

describe('<SocialLinks />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<SocialLinks />)
  })
})
