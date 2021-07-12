import { colorTypes, sizeTypes } from 'components/Heading'
import styled, { css, DefaultTheme } from 'styled-components'
import { IconsProps } from '.'

import { StyledIconBase } from '@styled-icons/styled-icon'
import media from 'styled-media-query'

const wrapperModifiers = {}

export const Wrapper = styled.div<Omit<IconsProps, 'icon'>>`
  ${({ theme, size, color }) => css`
    > svg {
      width: ${size};
      color: ${theme.colors[color!]};
    }
  `}
`
