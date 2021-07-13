import styled, { css, DefaultTheme } from 'styled-components'

import * as HeadingStyles from 'components/Heading/styles'
import media from 'styled-media-query'
import * as IconWrapperStyles from 'components/IconsWrapper/styles'

export const Wrapper = styled.footer`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxsmall};
    background-color: ${theme.colors.primary};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    user-select: none;

    ${IconWrapperStyles.Wrapper} {
      margin: 0 0.5rem;
    }

    ${media.lessThan('medium')`
      padding: 0 .8rem;

      ${IconWrapperStyles.Wrapper} {
        margin: 0 0.2rem;
      }
    `}
  `}
`

export const Text = styled(HeadingStyles.Wrapper)`
  ${({ theme }) => css`
    ${media.lessThan('medium')`
        text-align:center;
        font-size: ${theme.font.sizes.small}
    `}
  `}
`
