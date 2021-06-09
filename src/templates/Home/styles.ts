import styled, { css } from 'styled-components'

import * as HeadingStyles from 'components/Heading/styles'
import { Container } from 'components/Container/'
import media from 'styled-media-query'

export const Sections = styled.section`
  ${({ theme }) => css`
    ${SectionSkills}, ${SectionPortfolio}, ${SectionContact}, ${FooterWrapper} {
      /* Espaçamentos entre sessões */
      margin-top: 15rem;

      & > ${HeadingStyles.Wrapper} {
        /* Alinhando os titulos */
        text-align: center;
        margin-bottom: 7.5rem;
      }

      ${media.lessThan('medium')`
      /* Espaçamentos entre as sessões */
      margin-top:10rem;

      & > ${HeadingStyles.Wrapper} {
        /* Alinhando os titulos */
        width: 80%;
        margin-right: auto;
        margin-left: auto;
        margin-bottom: 6rem;
      }

      /* Fazendo com que fique full-width em telas menores */
        ${Container} {
          padding-left: 0;
          padding-right: 0;
        }
      `}
    }

    /* Definindo espaços a partir do primeiro filho */
    & > ${Container}:first-child {
      margin-top: 3rem;
    }
  `}
`

// Criado apenas para auxiliar na marcação do background
export const MarkBg = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
  `}
`

// gambiarra
export const MarkBgFooter = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
  `}
`

export const SectionAboutMe = styled.section``
export const SectionPortfolio = styled.section``
export const SectionSkills = styled.section``
export const SectionContact = styled.section``
export const FooterWrapper = styled.footer``
