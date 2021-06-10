import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

import { StyledIconBase } from '@styled-icons/styled-icon'

import { ContactCard } from '@styled-icons/fluentui-system-filled'
import { Whatsapp } from '@styled-icons/boxicons-logos'

import * as HeadingStyles from 'components/Heading/styles'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${theme.spacings.small} ${theme.spacings.medium};
    /* Selecionando o icone de agenda */
    ${HeadingStyles.Wrapper} {
      text-align: center;
      margin-top: 1rem;
    }
  `}
`

// Centralizando tudo
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

// Molde dos icones
const BaseIconModifier = {
  default: (
    theme: DefaultTheme,
    colorIcon: 'green' | '#0487cc',
    sizeIcon?: string,
  ) => css`
    color: ${colorIcon};
    width: ${sizeIcon};
  `,
}

// Icones
export const IconContactCard = styled(ContactCard)`
  ${({ theme }) => css`
    ${BaseIconModifier.default(theme, '#0487cc', '15rem')}

    ${media.lessThan('medium')`
      ${BaseIconModifier.default(theme, '#0487cc', '10rem')}
    `}
  `}
`

export const IconWhatsapp = styled(Whatsapp)`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xsmall};
    ${BaseIconModifier.default(theme, 'green', '10rem')}
    ${media.lessThan('medium')`
      ${BaseIconModifier.default(theme, 'green', '7rem')}
    `};
  `}
`
