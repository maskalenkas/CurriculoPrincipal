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
    & > ${Container},${SectionContact} {
      margin-top: 10rem;

      & > ${HeadingStyles.Wrapper} {
        text-align: center;
        margin-bottom: 6rem;
      }
    }

    & > ${Container}:first-child {
      margin-top: 3rem;
    }
  `}
`

// Criado apenas para uxiliar na marcação do background
export const MarkBg = styled.div``

export const SectionAboutMe = styled.section``
export const SectionPortfolio = styled.section``
export const SectionSkills = styled.section``
export const SectionContact = styled.section`
  ${MarkBg} {
    background-color: white;

    ${media.lessThan('medium')`
      padding: 8.5rem 0 3.5rem 0;

      margin-left: -4.2rem;
      margin-right: -4.2rem;
    `}
  }
`
