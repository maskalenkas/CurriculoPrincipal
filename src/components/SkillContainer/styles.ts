import styled, { css } from 'styled-components'

import { Wrapper as HeadingStyle } from 'components/Heading/styles'
import media from 'styled-media-query'

export const List = styled.ul`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${media.lessThan('medium')`
      align-items: flex-start;
      margin-top: -1rem;
    `}
  `}
`

export const ListItem = styled.li`
  ${({ theme }) => css`
    list-style: none;
  `}
`

// Usado para manter o icone eo texto juntos
export const ListItemIconWrapper = styled.div`
  ${({ theme }) => css`
    user-select: none;
    display: flex;
    margin-top: ${theme.spacings.xsmall};
    transition: all 0.2s;
    :hover {
      transform: scale(1.2);
      transition: all 0.2s;
      color: ${theme.colors.primary};
    }
  `}
`
