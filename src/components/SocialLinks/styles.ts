import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  display: flex;
`

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 2.4rem;
    cursor: pointer;
    color: ${theme.colors.secondary};
    box-sizing: content-box;
    padding: 0.6rem;
    border: 1px solid ${theme.colors.secondary};
    margin-right: ${theme.spacings.xsmall};
    transition: background-color 0.5s;
    &:hover {
      background-color: ${theme.colors.primary};
      color: ${theme.colors.white};
    }
    // O span inicia vazio
    span {
      position: absolute;
      opacity: 0;
    }

    // Fazendo o span aparecer
    &:hover span {
      opacity: 1;
      padding: 5px;
      background: black;
      margin-top: -4.5rem;
      left: 0;
      transition: all 0.3s;
    }
  `}
`
