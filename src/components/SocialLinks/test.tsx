import { render, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import SocialLinks from '.'

describe('<SocialLinks />', () => {
  it('should render the social links', () => {
    const { container, debug } = renderWithTheme(<SocialLinks />)

    expect(screen.getByLabelText(/facebook/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/linkedin/i)).toBeInTheDocument()
  })
})
