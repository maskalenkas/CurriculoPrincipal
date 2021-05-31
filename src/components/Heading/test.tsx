import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Heading from '.'

describe('<Heading />', () => {
  it('should render a black heading by default', () => {
    renderWithTheme(<Heading>Won Games</Heading>)
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      color: '#000000',
    })
  })

  it('should render a primary heading when color is passed', () => {
    renderWithTheme(<Heading color="primary">Won Games</Heading>)
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      color: '#0487cc',
    })
  })

  it('should render a heading with a small size', () => {
    renderWithTheme(<Heading size="small">Won Games</Heading>)
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      'font-size': '1.6rem',
    })

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyleRule(
      'width',
      '3rem',
      {
        modifier: '::after',
      },
    )
  })

  it('deve renderizar o heading com pesos diferentes', () => {
    renderWithTheme(<Heading weight="bold">Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      'font-weight': '700',
    })
  })

  it('deve renderizar o heading com uma fonte de texto', () => {
    renderWithTheme(<Heading asTextType="text">Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      'font-family':
        "PT Sans Narrow,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif",
      'font-size': '1.6rem',
      color: '#000000',
      'font-weight': 400,
    })
  })

  it('deve renderizar o heading com uma fonte de titulo', () => {
    renderWithTheme(<Heading asTextType="title">Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      'font-family':
        "Oswald,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif",
      'font-size': '4.0rem',
      color: '#000000',
      'font-weight': 600,
    })
  })

  it('deve renderizar o heading com uma fonte de subtitlo', () => {
    renderWithTheme(<Heading asTextType="subtitle">Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      'font-family':
        "PT Sans Narrow,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif",
      'font-size': '2.0rem',
      color: '#757575',
      'font-weight': 400,
    })
  })
})
