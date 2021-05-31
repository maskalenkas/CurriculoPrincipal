import * as HeadingStyles from 'components/Heading/styles'

import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 3fr;
    ${media.lessThan('medium')`
      grid-template-columns: 1fr;
    `}
    grid-gap: ${theme.spacings.xlarge};
    padding: ${theme.spacings.medium};
    background-color: white;
  `}
`

export const Photo = styled.img`
  ${({ theme }) => css`
    max-height: 35rem;
    padding: ${theme.spacings.xsmall};
  `}
`

export const Biography = styled.div``

export const Data = styled.div`
  ${media.lessThan('medium')`
  grid-template-columns: 1fr;
`};
  display: grid;
  grid-template-columns: 1fr 1fr;

  & ${HeadingStyles.Wrapper}:first-child {
    width: 10rem;
  }
`

export const Column = styled.div`
  ${({ theme }) => css`
    display: flex;
    padding-bottom: ${theme.spacings.xxsmall};
  `}
`
