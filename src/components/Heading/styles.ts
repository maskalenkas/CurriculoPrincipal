import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

import { HeadingProps, weightTypes } from '.'

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
    &::after {
      width: 3rem;
    }
  `,

  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};
    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `}
  `,

  weights: (theme: DefaultTheme, weight: weightTypes) => css`
    font-weight: ${theme.font[weight]};
  `,
}

export const Wrapper = styled.h2<HeadingProps>`
  ${({ theme, color, size, weight }) => css`
    color: ${theme.colors[color!]};
    ${!!size && wrapperModifiers[size](theme)}
    ${!!weight && wrapperModifiers.weights(theme, weight)}
  `}
`
