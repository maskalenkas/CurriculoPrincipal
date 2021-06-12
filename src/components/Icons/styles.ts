import { colorTypes, sizeTypes } from 'components/Heading'
import styled, { css, DefaultTheme } from 'styled-components'
import { IconsProps } from '.'

import { StyledIconBase } from '@styled-icons/styled-icon'
import media from 'styled-media-query'

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
  sizeMediaMod: (theme: DefaultTheme, sizeMedia: sizeTypes | string) => css`
    ${media.lessThan('medium')`
      width: ${sizeMedia}
    `}
  `,
  marginTopMod: (theme: DefaultTheme, marginTop: string) => css`
    top: ${marginTop};
  `,
}

export const Wrapper = styled.main<IconsProps>`
  ${({ theme, color, size, hoverColor, isScale, sizeMedia, marginTop }) => css`
    width: ${size};
    color: ${theme.colors[color]};
    transition: all 0.2s;
    display: inline-block;
    position: relative;

    ${!!hoverColor && wrapperModifiers.hoverColor(theme, hoverColor)}
    ${!!isScale && wrapperModifiers.scaleMod(theme)}
    ${!!sizeMedia && wrapperModifiers.sizeMediaMod(theme, sizeMedia)}
    ${!!marginTop && wrapperModifiers.marginTopMod(theme, marginTop)}
  `}
`
