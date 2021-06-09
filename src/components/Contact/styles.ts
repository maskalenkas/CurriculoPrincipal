import styled, { css } from 'styled-components'
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
    padding: ${theme.spacings.medium};
    /* Selecionando o icone de agenda */
    ${HeadingStyles.Wrapper} {
      text-align: center;
      margin-top: 1rem;
    }
  `}
`

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    /* Selecionando todos os icones */
    > ${StyledIconBase} {
      width: 17rem;
      transition: all 0.2s;

      &:hover {
        transform: scale(1.2);
        cursor: pointer;
        transition: all 0.2s;
      }
    }

    ${media.lessThan('medium')`
     & > ${StyledIconBase} {
        width: 13rem;
      }
`}
  `}
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const IconWhatsapp = styled(Whatsapp)`
  color: lime;

  width: 12rem !important;
`
export const IconContactCard = styled(ContactCard)`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
  `}
`
