import styled, { css } from 'styled-components'

import * as HeadingStyles from 'components/Heading/styles'
import { Container } from 'components/Container/'

export const Sections = styled.section`
  ${({ theme }) => css`
    & > ${Container} {
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

export const SectionAboutMe = styled.section``
export const SectionPortfolio = styled.section``
export const SectionSkills = styled.section``
export const SectionContact = styled.section``
