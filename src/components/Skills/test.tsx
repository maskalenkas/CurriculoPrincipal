import { getByPlaceholderText, getByRole, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import { CypressWrapper, IconWrapper } from './styles'

import mockItems from './mock'

import Skills from '.'

describe('<Skills />', () => {
  it('Vai testar se todos os componentes estão sendo renderizados', () => {
    const { container } = renderWithTheme(<Skills items={...mockItems} />)
  })
})
