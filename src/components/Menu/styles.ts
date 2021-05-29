import styled, { css } from 'styled-components'

export const Wrapper = styled.menu`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    padding: ${theme.spacings.small} 0;
  `}
`

export const MenuNav = styled.div``

export const MenuLogo = styled.div``

export const MenuFull = styled.div``

export const MenuLink = styled.a``
