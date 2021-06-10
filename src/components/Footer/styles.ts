import styled, { css, DefaultTheme } from 'styled-components'

import { Coffee, Heart } from '@styled-icons/boxicons-solid'

import * as HeadingStyles from 'components/Heading/styles'
import { colorTypes, HeadingProps } from 'components/Heading'
import media from 'styled-media-query'

export const Wrapper = styled.footer`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    padding: ${theme.spacings.small};
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;

    ${media.lessThan('medium')`
      padding: ${theme.spacings.xsmall};
    `}
  `}
`

// Molde dos icons componentes
const IconBaseModifier = {
  Default: (
    theme: DefaultTheme,
    color: colorTypes,
    hoverColor: 'red' | 'black',
  ) => css`
    width: 3.1rem;
    color: ${theme.colors[color]};
    box-sizing: content-box;
    margin-top: -0.5rem;
    transition: 0.4s;

    :hover {
      color: ${hoverColor};
      transition: 0.4s;
    }

    ${media.lessThan('medium')`
      width: 2.5rem;
    `}
  `,
}

// Componentes
export const IconCoffee = styled(Coffee)`
  ${({ theme }) => css`
    ${IconBaseModifier.Default(theme, 'white', 'black')}
  `}
`

export const IconLove = styled(Heart)`
  ${({ theme }) => css`
    ${IconBaseModifier.Default(theme, 'white', 'red')}
  `}
`

// O texto em si
export const Text = styled(HeadingStyles.Wrapper)`
  ${({ theme }) => css`
    ${media.lessThan('medium')`
        text-align:center;
        font-size: ${theme.font.sizes.xlarge}
    `}
  `}
`
