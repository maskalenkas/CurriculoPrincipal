import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import '../../../setupTests'

jest.mock('components/IconsWrapper', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="mock-icons"></div>
    },
  }
})

import Contact from '.'

describe('<Contact />', () => {
  it('deve renderizar o componente, com os icones', () => {
    renderWithTheme(<Contact />)

    expect(screen.getAllByTestId('mock-icons')).toHaveLength(2)
  })
})
