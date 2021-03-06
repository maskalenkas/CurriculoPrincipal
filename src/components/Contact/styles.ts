import styled, { css, DefaultTheme } from 'styled-components'

import * as HeadingStyles from 'components/Heading/styles'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    user-select: none;
    background-color: ${theme.colors.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${theme.spacings.small} ${theme.spacings.medium};
    /* Selecionando o icone de agenda */
    ${HeadingStyles.Wrapper} {
      text-align: center;
      margin: 1rem 0;
    }
  `}
`

// Centralizando tudo
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
