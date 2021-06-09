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

    /* Fazendo com que fique full-width em telas menores */
    ${SectionSkills}, ${SectionPortfolio}, ${SectionContact} {
      & > ${MarkBg} {
        background-color: white;
      }

      ${media.lessThan('medium')`
        padding: 8.5rem 0 3.5rem 0;
        margin-left: -4.2rem;
        margin-right: -4.2rem;
        background-color: red;
      `}
    }

    /* Definindo espaços a partir das sessões */
    & > ${Container},${SectionContact}, ${SectionSkills}, ${SectionPortfolio} {
      margin-top: 10rem;

      /* Definindo espaços a partir dos titulos */
      & > ${HeadingStyles.Wrapper} {
        text-align: center;
        margin-bottom: 6rem;
      }
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
