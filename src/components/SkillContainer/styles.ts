import styled, { css } from 'styled-components'

import { Wrapper as HeadingStyle } from 'components/Heading/styles'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    margin-top: 5rem;
    position: relative;
    padding: 0.5rem 3rem 3rem 3rem;
  `}
`

// Titulo centralizado
export const Title = styled.div`
  ${({ theme }) => css`
    user-select: none;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -8rem;
    padding: 1.8rem 2.8rem;
    background-color: ${theme.colors.primary};
    transition: all 0.2s;

    ${HeadingStyle} {
      text-align: center;
    }

    ${media.lessThan('medium')`
      padding: 1.5rem 3.5rem
    `}
  `}
`

export const List = styled.ul`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

//  Stories
export const DisplayStories = styled.div`
  margin-top: 100px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10rem;
  position: relative;

  ${media.lessThan('medium')`
    gap: 2rem;
  `}
`

export const ColumnStories = styled.div`
  ${({ theme }) => css`
    position: relative;
    background-color: ${theme.colors.white};
  `}
`
