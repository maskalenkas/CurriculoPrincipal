import * as HeadingStyles from 'components/Heading/styles'

import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-gap: ${theme.spacings.xlarge};
    padding: ${theme.spacings.medium};
    background-color: white;
  `}
`

export const Photo = styled.img`
  max-height: 100%;
  max-width: 100%;
`

export const Biography = styled.div``

export const Data = styled.div`
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
