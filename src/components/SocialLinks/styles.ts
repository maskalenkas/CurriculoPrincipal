import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  display: flex;
`

export type IconWrapperProps = {
  content: string
}

export const IconWrapper = styled.div<IconWrapperProps>`
  ${({ theme, content }) => css`
    position: relative;
    width: 2.4rem;
    cursor: pointer;
    color: ${theme.colors.secondary};
    box-sizing: content-box;
    padding: 0.6rem;
    border: 1px solid ${theme.colors.secondary};
    margin-right: ${theme.spacings.xsmall};
    transition: background-color 0.5s;
    &:hover {
      background-color: ${theme.colors.primary};
      color: ${theme.colors.white};
    }
    &:hover:before {
      content: 'facebook';
      position: absolute;
      padding: 5px;
      background: black;
      margin-top: -40px;
      left: 0;
    }
  `}
`
