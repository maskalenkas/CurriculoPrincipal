// O cypress sempre vai ter um width menor

import styled, { css, DefaultTheme } from 'styled-components'

import { StyledIconBase } from '@styled-icons/styled-icon'

import { Wrapper as HeadingStyle } from 'components/Heading/styles'

import { Testinglibrary, Cypress } from '@styled-icons/simple-icons'
import media from 'styled-media-query'

export const Content = styled.div`
  ${({ theme }) => css`
    /* Fazendo com que tenha coluna de textos e icones */
    gap: 5rem 0;
    grid-template-columns: repeat(4, 1fr);
    display: grid;
    justify-items: center;
    align-items: center;

    ${media.lessThan('medium')`
      gap: 2rem 0;
      grid-template-columns: repeat(3, 1fr)
    `}
  `};
`

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    /* Fazendo com que o icone fique em cima e o texto em baixo */
    display: grid;
    position: relative;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    text-align: center;

    /* Deixando o texto com efeito */
    ${HeadingStyle} {
      user-select: none;
      font-size: ${theme.font.sizes.xxlarge};
      margin-top: ${theme.spacings.xsmall};
      text-align: center;

      ${media.lessThan('medium')`
        margin-top: ${theme.spacings.xxsmall};
        font-size: ${theme.font.sizes.small};
        line-height: 1;
      `}

      & :after {
        content: '';
        position: absolute;
        left: 0;
        display: inline-block;
        height: 1em;
        width: 100%;
        border-bottom: 1px solid;
        margin-top: 5px;
        opacity: 0;
        -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
        transition: opacity 0.35s, transform 0.35s;
        -webkit-transform: scale(0, 1);
        transform: scale(0, 1);
      }

      &:hover:after {
        opacity: 1;
        -webkit-transform: scale(1);
        transform: scale(1);
      }
    }
  `}
`
