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
    ${SectionConhecimentos}, ${SectionPortfolio}, ${SectionContact},${SectionSkills},${FooterWrapper} {
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

// Criado exclusivamente para a estrutura de skills
export const ContainerSkills = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10rem;
  position: relative;
  ${media.lessThan('medium')`
    gap: 8rem;
    grid-template-columns: 1fr;
  `}
`

export const ColumnSkills = styled.div`
  position: relative;
`

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // /

const sectionModifiers = {
  /* Fazendo com que fique full-width em telas menores */
  fullWidthMedia: () => css`
    ${media.lessThan('medium')`
      ${Container} {
        padding-left: 0;
        padding-right: 0;
    }
  `}
  `,
}

export const SectionAboutMe = styled.section``
export const SectionPortfolio = styled.section`
  ${sectionModifiers.fullWidthMedia()}
`
export const SectionConhecimentos = styled.section`
  ${sectionModifiers.fullWidthMedia()}
`
export const SectionContact = styled.section`
  ${sectionModifiers.fullWidthMedia()}
`
export const SectionSkills = styled.section``

export const FooterWrapper = styled.footer`
  ${sectionModifiers.fullWidthMedia()}
`

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > ${HeadingStyles.Wrapper} {
    /* Efeito e alinhamento */
    margin-bottom: 7.5rem;
    transition: all 0.4s;
    text-align: center;

    :hover {
      user-select: none;
      transform: scale(1.2);
      transition: all 0.2s;
    }
  }
`
