import { darken } from 'polished'
import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonProps } from '.'

type WrapperProps = { hasIcon: boolean } & Pick<ButtonProps, 'size'>

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    height: 3rem;
    font-size: ${theme.font.sizes.xsmall};
  `,
  medium: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
  `,
  large: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
  `,

  withIcon: (theme: DefaultTheme) => css`
    svg {
      width: 1.5rem;
      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `,
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, hasIcon }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    border: 0;
    cursor: pointer;
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};
    text-decoration: none;

    &:hover {
      background: ${darken(0.1, theme.colors.primary)};
      transition: all 0.2s;
    }

    ${!!size && wrapperModifiers[size](theme)};
    ${!!hasIcon && wrapperModifiers.withIcon(theme)};
  `}
`
