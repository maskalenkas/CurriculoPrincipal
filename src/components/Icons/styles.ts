import { colorTypes } from 'components/Heading'
import styled, { css, DefaultTheme } from 'styled-components'
import { IconsProps } from '.'

const wrapperModifiers = {
  hoverColor: (theme: DefaultTheme, hoverColor: colorTypes) => css`
    & :hover {
      color: ${theme.colors[hoverColor]};
    }
  `,
}

export const Wrapper = styled.main<IconsProps>`
  ${({ theme, color, size, hoverColor }) => css`
    > * {
      width: ${size};
      color: ${theme.colors[color]};
      transition: all 0.2s;

      ${!!hoverColor && wrapperModifiers.hoverColor(theme, hoverColor)}
    }
  `}
`
