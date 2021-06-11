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

    expect(screen.getByRole('img', { name: /coffee/i })).toHaveStyle({
      width: '5rem',
    })
  })

  it('deve testar o hover e o transform', () => {
    const { container } = renderWithTheme(
      <Icons color="primary" size="5rem" hoverColor="primary">
        <Coffee title="Coffee" />
      </Icons>,
    )

    expect(screen.getByRole('img', { name: /coffee/i })).toHaveStyleRule(
      'color',
      '#0487cc',
      {
        modifier: ':hover',
      },
    )
  })
})
