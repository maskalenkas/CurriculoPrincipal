// O cypress sempre vai ter um width menor

import styled, { css, DefaultTheme } from 'styled-components'

import { StyledIconBase } from '@styled-icons/styled-icon'

import {
  Javascript,
  Html5,
  Css3,
  Git,
  ReactLogo,
  Bootstrap,
} from '@styled-icons/boxicons-logos'

import { Wrapper as HeadingStyle } from 'components/Heading/styles'

import { Testinglibrary, Cypress } from '@styled-icons/simple-icons'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    margin-top: 50px;
    position: relative;
    padding: 3.5rem 3rem 3rem 3rem;
    background: ${theme.colors.white};

    ${media.lessThan('medium')`
      padding: 8.5rem 0 3.5rem 0;

      margin-left: -4.2rem;
      margin-right: -4.2rem;
    `}
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    gap: 5rem 0;
    grid-template-columns: repeat(3, 1fr);
    display: grid;
    justify-items: center;
    align-items: center;

    ${media.lessThan('medium')`
      grid-template-columns: repeat(2, 1fr)
    `}
  `};
`

export const Title = styled.div`
  ${({ theme }) => css`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -4rem;
    padding: 1.8rem 2.8rem;
    background-color: ${theme.colors.primary};
    cursor: pointer;

    ${HeadingStyle} {
      text-align: center;
    }

    ${media.lessThan('medium')`
      padding: 0.5rem 3.5rem
    `}
  `}
`

const IconWrapperModifiers = {
  size: (theme: DefaultTheme, iconSize: string) => css`
    width: ${iconSize};
  `,
}

export type IconWrapperProps = {
  iconSize?: string
}

export const IconWrapper = styled.div<IconWrapperProps>`
  ${({ theme, iconSize }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    ${HeadingStyle} {
      font-size: ${theme.font.sizes.xxlarge};
      margin-top: 1.5rem;
      text-align: center;
    }

    /* Selecionando todos os icones */
    ${StyledIconBase} {
      width: 15rem;
      ${!!iconSize && IconWrapperModifiers.size(theme, iconSize)}
      transition: all 0.2s;

      &:hover {
        transform: scale(1.2);
        cursor: pointer;
        transition: all 0.2s;
      }
    }

    ${media.lessThan('medium')`
      ${StyledIconBase} {
        width: 10rem;
      }

      & > ${CypressWrapper} {
        width: 8rem;

      }
    `}
  `}
`

export const JSWrapper = styled(Javascript)`
  color: #eed941;
`
export const HTMLWrapper = styled(Html5)`
  color: #dd4b25;
`
export const CSSWrapper = styled(Css3)`
  color: #0280c6;
`

export const GitWrapper = styled(Git)`
  color: #e94e31;
`

export const ReactWrapper = styled(ReactLogo)`
  color: #5dd3f3;
`
export const BootstrapWrapper = styled(Bootstrap)`
  color: #7550ad;
`

export const TestingLibraryWrapper = styled(Testinglibrary)`
  color: #ec4642;
`

export const CypressWrapper = styled(Cypress)`
  color: #59595b;
  & + ${HeadingStyle} {
    padding-top: 1.7rem;
  }
`
