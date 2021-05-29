import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-gap: ${theme.spacings.xlarge};
    padding: ${theme.spacings.medium};
    background-color: red;
  `}
`

export const Photo = styled.img`
  max-height: 100%;
  max-width: 100%;
`

export const Biography = styled.div``
