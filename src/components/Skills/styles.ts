// O cypress sempre vai ter um width menor

import styled, { css, DefaultTheme } from 'styled-components'

import { StyledIconBase } from '@styled-icons/styled-icon'

import { Wrapper as HeadingStyle } from 'components/Heading/styles'

import { Testinglibrary, Cypress } from '@styled-icons/simple-icons'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    position: relative;
    padding: 6.5rem 3rem 3rem 3rem;
    background: ${theme.colors.white};

    ${media.lessThan('medium')`
      padding: 4rem 2rem 4rem 2rem;
    `}
  `}
`

export const Title = styled.div`
  ${({ theme }) => css`
    user-select: none;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -3.5rem;
    padding: 1.8rem 1.7rem;
    background-color: ${theme.colors.primary};

    ${HeadingStyle} {
      text-align: center;
    }

    ${media.lessThan('medium')`
      padding: 1.5rem 1.5rem;
      top: -2.8rem;
      
      ${HeadingStyle} {
        font-size: ${theme.font.sizes.xlarge}
      }
    `}
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    /* Fazendo com que tenha coluna de textos e icones */
    gap: 5rem 0;
    grid-template-columns: repeat(5, 1fr);
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
        font-size: ${theme.font.sizes.medium};
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

export const CypressWrapper = styled(Cypress)`
  color: #59595b;
  & + ${HeadingStyle} {
    padding-top: 1.7rem;
  }
`
