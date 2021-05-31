import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
`

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    width: 3.4rem;
    height: 3.4rem;
    cursor: pointer;

    &:hover {
      color: ${theme.colors.primary};
      transition: 0.2s;
    }
  `}
`
