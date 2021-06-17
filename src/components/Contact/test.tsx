import { render, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import * as StyledIcons from 'components/Contact/styles'

import Contact from '.'

describe('<Contact />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Contact />)
  })

  it('dever renderizar o icone de acordo com o size passado', () => {
    const { container } = renderWithTheme(<StyledIcons.IconWhatsapp />)
  })
})
