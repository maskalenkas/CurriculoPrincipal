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

import {
  Testinglibrary,
  Cypress,
  StyledComponents,
} from '@styled-icons/simple-icons'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    margin-top: 50px;
    position: relative;
    padding: 3.5rem 3rem 3rem 3rem;
    background: ${theme.colors.white};
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    gap: 5rem 0;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    align-items: center;
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

    ${HeadingStyle} {
      font-size: ${theme.font.sizes.xxlarge};
      margin-top: 1.5rem;
    }

    ${StyledIconBase} {
      width: 10rem;
      ${!!iconSize && IconWrapperModifiers.size(theme, iconSize)}
    }
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
`
