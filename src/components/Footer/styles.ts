import styled, { css, DefaultTheme } from 'styled-components'

import { Coffee, Heart } from '@styled-icons/boxicons-solid'

import * as HeadingStyles from 'components/Heading/styles'
import { colorTypes, HeadingProps } from 'components/Heading'

export const Wrapper = styled.footer`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    padding: ${theme.spacings.small};
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
  `}
`

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
  `,
}

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

export const Text = styled(HeadingStyles.Wrapper)`
  ${({ theme }) => css``}
`
