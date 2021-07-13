import styled from 'styled-components'

import * as HeadingStyle from 'components/Heading/styles'
import media from 'styled-media-query'
import { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    user-select: none;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -3.5rem;
    padding: 1.8rem 1.7rem;
    background-color: ${theme.colors.primary};

    ${HeadingStyle.Wrapper} {
      text-align: center;
    }

    ${media.lessThan('medium')`
      padding: 1.5rem 1.5rem;
      top: -2.8rem;
      
      ${HeadingStyle.Wrapper} {
        font-size: ${theme.font.sizes.xlarge};
      }
    `}
  `}
`
export const Title = styled.div``

// Stories
export const DisplayStories = styled.div`
  position: relative;
  margin-top: 100px;
  background-color: white;
  height: 200px;
`
