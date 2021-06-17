import styled, { css, DefaultTheme } from 'styled-components'

import { Coffee, Heart } from '@styled-icons/boxicons-solid'

import * as HeadingStyles from 'components/Heading/styles'
import media from 'styled-media-query'

export const Wrapper = styled.footer`
  ${({ theme }) => css`
    padding: ${theme.spacings.small};
    background-color: ${theme.colors.primary};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    user-select: none;

    ${media.lessThan('medium')`
      padding: ${theme.spacings.xsmall};
    `}
  `}
`

// O texto em si
export const Text = styled(HeadingStyles.Wrapper)`
  ${({ theme }) => css`
    ${media.lessThan('medium')`
        text-align:center;
        font-size: ${theme.font.sizes.xlarge}
    `}
  `}
`
