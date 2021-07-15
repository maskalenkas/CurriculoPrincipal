import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import TitleBoard from '.'

describe('<TitleBoard />', () => {
  it('should render the heading', () => {
    renderWithTheme(<TitleBoard>Item 1</TitleBoard>)

    expect(screen.getByText(/Item 1/i)).toBeInTheDocument()
  })
})
