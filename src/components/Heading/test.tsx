import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Heading from '.'

describe('<Heading />', () => {
  it('deve renderizar o heading com texto, como é o padrão', () => {
    const { container, debug } = renderWithTheme(<Heading>Texto</Heading>)

    expect(screen.getByRole('heading', { name: /texto/i })).toHaveStyle({
      'font-family':
        "PT Sans Narrow,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif",
      'font-size': '1.6rem',
      'font-weight': 400,
      'letter-spacing': '0.5px',
      'line-height': '2.4rem',
    })
  })

  it('deve renderizar o heading como um titulo', () => {
    const { container, debug } = renderWithTheme(
      <Heading asTextType="title">Texto</Heading>,
    )

    expect(screen.getByRole('heading', { name: /texto/i })).toHaveStyle({
      'font-family':
        "Oswald,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif",
      'font-size': '4.0rem',
      'font-weight': 600,
    })
  })

  it('deve renderizar o heading como um subtitulo', () => {
    const { container, debug } = renderWithTheme(
      <Heading asTextType="subtitle">Texto</Heading>,
    )

    expect(screen.getByRole('heading', { name: /texto/i })).toHaveStyle({
      'font-family':
        "PT Sans Narrow,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif",
      'font-size': '2.0rem',
      'font-weight': 400,
    })
  })

  it('deve renderizar o heading com um size diferente e com o restante das configs padrões', () => {
    const { container, debug } = renderWithTheme(
      <Heading size="xxlarge">Texto</Heading>,
    )

    expect(screen.getByRole('heading', { name: /texto/i })).toHaveStyle({
      'font-family':
        "PT Sans Narrow,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif",
      'font-size': '2.8rem',
      'font-weight': 400,
      'letter-spacing': '0.5px',
      'line-height': '2.4rem',
    })
  })

  it('deve renderizar o heading com uma cor diferente', () => {
    const { container, debug } = renderWithTheme(
      <Heading color="primary">Texto</Heading>,
    )

    expect(screen.getByRole('heading', { name: /texto/i })).toHaveStyle({
      color: '#0487cc',
    })
  })

  it('deve renderizar o heading com um weight diferente', () => {
    const { container, debug } = renderWithTheme(
      <Heading weight="normal">Texto</Heading>,
    )

    expect(screen.getByRole('heading', { name: /texto/i })).toHaveStyle({
      'font-weight': 600,
    })
  })

  it('deve renderizar o heading com um padding', () => {
    const { container, debug } = renderWithTheme(
      <Heading marginBottom="small">Texto</Heading>,
    )

    expect(screen.getByRole('heading', { name: /texto/i })).toHaveStyle({
      'margin-bottom': '2.4rem',
    })
  })
})
