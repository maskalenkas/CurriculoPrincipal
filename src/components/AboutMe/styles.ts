import * as HeadingStyles from 'components/Heading/styles'

import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 2fr 3fr;
    grid-gap: ${theme.spacings.xlarge};
    padding: ${theme.spacings.medium};
    background-color: white;

    ${media.lessThan('medium')`
      grid-template-columns: 100%;
      grid-gap: 0;
      padding: ${theme.spacings.xsmall};
    `}
  `}
`

export const Photo = styled.img`
  ${({ theme }) => css`
    max-width: 55rem;
    margin-left: auto;
    margin-right: auto;
  `}
`

export const Biography = styled.div`
  > ${HeadingStyles.Wrapper} {
    user-select: none;
  }
`

export type ColumnProps = {
  displayColumn?: boolean
}

export const Column = styled.div<ColumnProps>`
  ${({ theme, displayColumn }) => css`
    display: flex;
    align-content: center;

    ${displayColumn && 'flex-direction: column'};
    padding-bottom: ${theme.spacings.xxsmall};
  `}
`

export const Data = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr;

    & ${HeadingStyles.Wrapper}:first-child {
      width: 8rem;
    }

    ${media.lessThan('medium')`
    grid-template-columns: 1fr;

    ${Column} {
      margin-top: ${theme.spacings.xxsmall};
      flex-direction: column;
      align-items: center;
    }

    ${Column} > ${HeadingStyles.Wrapper} {
      text-align: center;
      line-height: 1.1;
    `}
  `}
`

export const SocialLinksWrapper = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xsmall};
  `}
`
export const NameWrapper = styled.div`
  ${({ theme }) => css`
    ${HeadingStyles.Wrapper} {
      user-select: none;

      ${media.lessThan('medium')`
     
      font-size: ${theme.font.sizes.xxlarge};
    `}
    }
  `}
`
