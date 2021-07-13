import '../../../setupTests'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import { mock1 } from './mock'

import Skills from '.'

jest.mock('components/IconsWrapper', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="mock-Icons"></div>
    },
  }
})

describe('<Skills />', () => {
  it('Vai testar se todos os componentes estão sendo renderizados', () => {
    const { debug } = renderWithTheme(<Skills items={mock1} />)
    debug()

    // Verificando se tem 13 elementos no array de icones
    expect(screen.getAllByTestId('mock-Icons')).toHaveLength(13)
  })
})
