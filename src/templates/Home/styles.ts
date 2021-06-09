import styled, { css } from 'styled-components'

import * as HeadingStyles from 'components/Heading/styles'
import { Container } from 'components/Container/'
import media from 'styled-media-query'

export const Sections = styled.section`
  ${({ theme }) => css`
    & > ${HeadingStyles.Wrapper} {
      text-align: center;
      margin-bottom: 6rem;
    }

    ${SectionSkills}, ${SectionPortfolio}, ${SectionContact} {
      /* Espaçamentos entre sessões */
      margin-top: 15rem;

      & > ${HeadingStyles.Wrapper} {
        margin-bottom: 7.5rem;
      }

      & > ${MarkBg} {
        background-color: white;
      }

      ${media.lessThan('medium')`
      /* Espaçamento entre sessões */
      margin-top:10rem;

      & > ${HeadingStyles.Wrapper} {
        /* width 50 */
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
export const MarkBg = styled.div``

export const SectionAboutMe = styled.section``
export const SectionPortfolio = styled.section``
export const SectionSkills = styled.section``
export const SectionContact = styled.section``
