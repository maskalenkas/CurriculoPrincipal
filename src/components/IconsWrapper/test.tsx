import { render, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import IconsWrapper from '.'

describe('<IconsWrapper />', () => {
  it('Deve renderizar o icone e testar todos os estilos ', () => {
    const { debug } = renderWithTheme(
      <IconsWrapper
        icon="Typescript"
        hoverColor="red"
        size="1rem"
        color="white"
        relativeY="1rem"
      />,
    )
    const imagem = screen.getByRole('img')

    expect(imagem).toBeInTheDocument()

    // Deve testar a color
    expect(imagem).toHaveStyle({ color: '#FAFAFA' })

    // Deve testar o relativeY
    expect(imagem).toHaveStyle({ top: '1rem' })

    // Deve ter o size
    expect(imagem).toHaveStyle({ width: '1rem' })
  })

  it('Deve renderizar o icone e testar se o colorNoDefault sobrepõe o color ', () => {
    renderWithTheme(
      <IconsWrapper icon="Typescript" color="white" colorNoDefault="#ffffff" />,
    )
    const imagem = screen.getByRole('img')

    expect(imagem).not.toHaveStyle({ color: '#FAFAFA' })
    expect(imagem).toHaveStyle({ color: '#ffffff' })
  })
})
