import { render, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import { Coffee } from '@styled-icons/boxicons-solid'

import Icons from '.'

describe('<Icons />', () => {
  it('deve testar a renderização e o media', () => {
    const { container } = renderWithTheme(
      <Icons
        color="primary"
        size="5rem"
        sizeMedia="2rem"
        data-testid="icone"
        title="coffe"
      >
        <Coffee />
      </Icons>,
    )

    expect(screen.getByTitle(/coffe/i)).toBeInTheDocument()

    expect(screen.getByTitle(/coffe/i)).toHaveStyleRule('min-width', '2rem', {
      media: '(max-width: 768px)',
    })
  })

  it('deve testar o hover', () => {
    renderWithTheme(
      <Icons color="primary" size="5rem" hoverColor="secondary" title="Coffee">
        <Coffee />
      </Icons>,
    )

    expect(screen.getByTitle(/coffe/i)).toHaveStyleRule('color', '#757575', {
      modifier: ':hover',
    })
  })

  it('Varias propriedades aplicadas em estilo', () => {
    const { debug, container } = renderWithTheme(
      <Icons
        size="15rem"
        color="primary"
        title="Coffee"
        colorNoDefault="#fffff"
        marginTop="5rem"
        Top="5rem"
      >
        <Coffee />
      </Icons>,
    )

    expect(screen.getByTitle(/coffe/i)).toHaveStyle({
      'margin-top': '5rem',
      top: '5rem',
      color: '#fffff',
    })
  })

  it('deve testar o zoom ao passar o mouse', () => {
    const { debug, container } = renderWithTheme(
      <Icons size="15rem" color="primary" isScale={true} title="Coffee">
        <Coffee />
      </Icons>,
    )

    expect(screen.getByTitle(/coffe/i)).toHaveStyleRule(
      'transform',
      'scale(1.2)',
      {
        modifier: ':hover',
      },
    )
  })
})
