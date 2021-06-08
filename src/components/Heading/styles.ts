import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

import {
  asTypes,
  colorTypes,
  fontTypes,
  HeadingProps,
  marginBottomTypes,
  sizeTypes,
  weightTypes,
} from '.'

// tipos da função que vai criar os estilos padrões
type fontFamilyProps = 'ptsams' | 'oswald'
type fontSizeProps = 'xxxlarge' | 'xlarge' | 'medium'
type fontWeightProps = 'light' | 'normal'

// Função que vai ser chamada para fazer os estilos padrões
const autoStyle = (
  theme: DefaultTheme,
  fontFamily: fontFamilyProps,
  fontSize: fontSizeProps,
  fontWeight: fontWeightProps,
) => css`
  font-family: ${theme.font.family[fontFamily]};
  font-size: ${theme.font.sizes[fontSize]};
  font-weight: ${theme.font[fontWeight]};
`

const wrapperModifiers = {
  asType: (theme: DefaultTheme, typeText: asTypes) => css`
    ${typeText == 'text' &&
    css`
      ${autoStyle(theme, 'ptsams', 'medium', 'light')}
      line-height: ${theme.spacings.small};
    `}

    ${typeText == 'title' &&
    css`
      ${autoStyle(theme, 'oswald', 'xxxlarge', 'normal')}
      text-transform: uppercase;
      color: ${theme.colors.black};
      line-height: 1.1;
    `}

    ${typeText == 'subtitle' &&
    css`
      ${autoStyle(theme, 'ptsams', 'xlarge', 'light')}
      color: ${theme.colors.secondary};
    `}
  `,

  size: (theme: DefaultTheme, size: sizeTypes) => css`
    font-size: ${theme.font.sizes[size]};
  `,

  colors: (theme: DefaultTheme, color: colorTypes) => css`
    color: ${theme.colors[color]};
  `,

  weight: (theme: DefaultTheme, weight: weightTypes) => css`
    font-weight: ${theme.font[weight]};
  `,

  font: (theme: DefaultTheme, font: fontTypes) => css`
    font-family: ${theme.font.family[font]};
  `,

  padding: (theme: DefaultTheme, marginBottom: marginBottomTypes) => css`
    margin-bottom: ${theme.spacings[marginBottom]};
  `,
}

export const Wrapper = styled.h2<HeadingProps>`
  ${({ theme, asTextType, size, color, weight, font, marginBottom }) => css`
    ${!!asTextType && wrapperModifiers.asType(theme, asTextType)}

    // Depois vem o customizavel
    ${!!size && wrapperModifiers.size(theme, size)}
    ${!!color && wrapperModifiers.colors(theme, color)}
    ${!!weight && wrapperModifiers.weight(theme, weight)}
    ${!!font && wrapperModifiers.font(theme, font)}
    ${!!marginBottom && wrapperModifiers.padding(theme, marginBottom)}

    letter-spacing: 0.5px;
    text-align: justify;
  `}
`
