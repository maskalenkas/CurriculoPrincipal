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
  `,

  weights: (theme: DefaultTheme, weight: weightTypes) => css`
    font-weight: ${theme.font[weight]};
  `,

  text: (theme: DefaultTheme) => css`
    font-family: ${theme.font.family.ptsams};
    font-size: ${theme.font.sizes.medium};
    line-height: ${theme.spacings.small};
    color: ${theme.colors.black};
    font-weight: ${theme.font.light};
  `,
  title: (theme: DefaultTheme) => css`
    font-family: ${theme.font.family.oswald};
    font-size: ${theme.font.sizes.xxxlarge};
    text-transform: uppercase;
    color: ${theme.colors.black};
    font-weight: ${theme.font.normal};
  `,
  subtitle: (theme: DefaultTheme) => css`
    font-family: ${theme.font.family.ptsams};
    font-size: ${theme.font.sizes.xlarge};
    color: ${theme.colors.secondary};
    font-weight: ${theme.font.light};
  `,
}

export const Wrapper = styled.h2<HeadingProps>`
  ${({ theme, color, size, weight, asTextType }) => css`
    letter-spacing: 0.5px;
    color: ${theme.colors[color!]};
    ${!!size && wrapperModifiers[size](theme)}
    ${!!weight && wrapperModifiers.weights(theme, weight)}
    ${!!asTextType && wrapperModifiers[asTextType](theme)}
  `}
`
