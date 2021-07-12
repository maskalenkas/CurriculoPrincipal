import { render, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import IconsWrapper from '.'

describe('<IconsWrapper />', () => {
  it('Deve renderizar o icone ', () => {
    const { debug } = renderWithTheme(
      <IconsWrapper icon="Typescript" size="1rem" />,
    )
    debug()
    expect(screen.getByTitle('Typescript')).toBeInTheDocument()
  })
})
