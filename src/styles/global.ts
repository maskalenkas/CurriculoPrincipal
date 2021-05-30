import {
  createGlobalStyle,
  css,
  DefaultTheme,
  GlobalStyleComponent,
} from 'styled-components'

type GlobalStylesProps = {
  removeBg?: boolean
}

const GlobalStyles: GlobalStyleComponent<
  GlobalStylesProps,
  DefaultTheme
> = createGlobalStyle`
/* oswald-600 - latin */
@font-face {
  font-family: 'Oswald';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: local(''),
       url('../fonts/oswald-v36-latin-600.woff2') format('woff2')
}

@font-face {
  font-family: 'PT Sans Narrow';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local(''),
       url('../fonts/pt-sans-narrow-v12-latin-regular.woff2') format('woff2')
}
/* pt-sans-narrow-700 - latin */
@font-face {
  font-family: 'PT Sans Narrow';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: local(''),
       url('../fonts/pt-sans-narrow-v12-latin-700.woff2') format('woff2')
}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    &::before,
    &::after {
      box-sizing: inherit;
    }
  }
  ${({ theme, removeBg }) => css`
    html {
      font-size: 62.5%;
    }
    body {
      font-family: ${theme.font.family.ptsams};
      font-size: ${theme.font.sizes.medium};
      ${!removeBg &&
      css`
        background-color: ${theme.colors.mainBg};
      `}
    }
  `}
`

export default GlobalStyles
