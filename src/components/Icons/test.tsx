import { render, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import { StyledIconBase } from '@styled-icons/styled-icon'

import { Coffee } from '@styled-icons/boxicons-solid'

import Icons from '.'

describe('<Icons />', () => {
  it('deve testar a renderização e o media', () => {
    const { debug, container } = renderWithTheme(
      <Icons color="primary" size="5rem" sizeMedia="2rem" title="icon coffe">
        <Coffee data-testid="icone" />
      </Icons>,
    )

    screen.logTestingPlaygroundURL()

    // Testando se o size normal é aplicado
    expect(screen.getByTestId('icone')).toHaveStyle({ width: '5rem' })

    // Testando se stylerule é aplicado
    expect(screen.getByTestId('icone')).toHaveStyleRule('width', '5rem')
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
