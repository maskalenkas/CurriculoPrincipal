import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    position: relative;
    padding: ${theme.spacings.xlarge} ${theme.spacings.medium}
      ${theme.spacings.medium} ${theme.spacings.medium};
    background-color: ${theme.colors.white};

    ${media.lessThan('medium')`
    padding: ${theme.spacings.large} ${theme.spacings.xsmall}
      ${theme.spacings.xsmall} ${theme.spacings.xsmall};
    `}
  `}
`
