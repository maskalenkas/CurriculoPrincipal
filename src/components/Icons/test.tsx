import { render, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import { Coffee } from '@styled-icons/boxicons-solid'

import Icons from '.'

describe('<Test />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(
      <Icons color="primary" size="5rem" data-testid="icone">
        <Coffee title="Coffee" />
      </Icons>,
    )

    expect(
      screen.getByRole('img', { name: /coffee/i }).parentElement,
    ).toHaveStyle({
      width: '5rem',
    })
  })

  it('deve testar o hover', () => {
    const { debug, container } = renderWithTheme(
      <Icons color="primary" size="5rem" hoverColor="secondary">
        <Coffee title="Coffee" />
      </Icons>,
    )

    expect(
      screen.getByRole('img', { name: /coffee/i }).parentElement,
    ).toHaveStyleRule('color', '#757575', {
      modifier: ':hover',
    })
  })

  it('deve testar o zoom ao passar o mouse', () => {
    const { debug, container } = renderWithTheme(
      <Icons size="15rem" color="primary" isScale={true}>
        <Coffee title="Coffee" />
      </Icons>,
    )

    expect(
      screen.getByRole('img', { name: /coffee/i }).parentElement,
    ).toHaveStyleRule('transform', 'scale(1.2)', {
      modifier: ':hover',
    })
  })
})
