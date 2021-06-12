import { colorTypes } from 'components/Heading'
import styled, { css, DefaultTheme } from 'styled-components'
import { IconsProps } from '.'

import { StyledIconBase } from '@styled-icons/styled-icon'

const wrapperModifiers = {
  hoverColor: (theme: DefaultTheme, hoverColor: colorTypes) => css`
    :hover {
      color: ${theme.colors[hoverColor]};
    }
  `,
  scaleMod: (theme: DefaultTheme) => css`
    :hover {
      transform: scale(1.2);
      cursor: pointer;
      transition: all 0.2s;
    }
  `,
}

export const Wrapper = styled.main<IconsProps>`
  ${({ theme, color, size, hoverColor, isScale }) => css`
    width: ${size};
    color: ${theme.colors[color]};
    transition: all 0.2s;

    ${!!hoverColor && wrapperModifiers.hoverColor(theme, hoverColor)}
    ${!!isScale && wrapperModifiers.scaleMod(theme)}
  `}
`
