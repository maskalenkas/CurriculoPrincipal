import { render, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import '../../../setupTests'

import * as StyledIcons from 'components/Contact/styles'

import Contact from '.'

describe('<Contact />', () => {
  it('deve renderizar o componente, com os icones', () => {
    const { container } = renderWithTheme(<Contact />)

    expect(screen.getByTitle(/icon Whatsapp/i)).toBeInTheDocument()
    expect(screen.getByTitle(/icon Contact/i)).toBeInTheDocument()
  })
})
