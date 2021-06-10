import styled, { css, DefaultTheme } from 'styled-components'

import * as HeadingStyles from 'components/Heading/styles'
import { Container } from 'components/Container/'
import media from 'styled-media-query'
import { colorTypes } from 'components/Heading'

export const Sections = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-itens: center;
    ${SectionSkills}, ${SectionPortfolio}, ${SectionContact}, ${FooterWrapper} {
      /* Espaçamentos entre sessões */
      margin-top: 15rem;

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

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // /
const MarkBgModifiers = {
  bgModifier: (theme: DefaultTheme, bgColor: colorTypes) => css`
    background-color: ${theme.colors[bgColor]};
  `,
}

type MarkBgProps = {
  colorBg?: colorTypes
}

// Criado apenas para auxiliar na marcação do background
export const MarkBg = styled.div<MarkBgProps>`
  ${({ theme, colorBg = 'white' }) => css`
    ${MarkBgModifiers.bgModifier(theme, colorBg)}
  `}
`
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // /

export const SectionAboutMe = styled.section``
export const SectionPortfolio = styled.section``
export const SectionSkills = styled.section``
export const SectionContact = styled.section``
export const FooterWrapper = styled.footer``

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > ${HeadingStyles.Wrapper} {
    /* Alinhando os titulos */
    margin-bottom: 7.5rem;
    cursor: pointer;
    transition: all 0.4s;
    text-align: center;

    :hover {
      transform: scale(1.2);
      cursor: pointer;
      transition: all 0.2s;
    }
  }
`
