import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Arthur Maskalenkas - Curriculo</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="title" content="Arthur Maskalenkas - Curriculo" />
        <meta
          name="description"
          content="Um curriculo de um desenvolvedor Front End, fã Javascript, React e novas tecnologias."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.maskalenkas.com.br/" />
        <meta property="og:title" content="Arthur Maskalenkas - Curriculo" />
        <meta
          property="og:description"
          content="Um curriculo de um desenvolvedor Front End, fã Javascript, React e novas tecnologias."
        />
        <meta
          property="og:image"
          content="https://photos.google.com/share/AF1QipOYiszrh1KdeiscQToYBK6D4_WOu5ChhswpbYQ5NNy979T2IQgachzXDmLmG8RETQ/photo/AF1QipPUJ-nXjdWQVrMsIuNLsL89pjTcfOGBMO-G7Y3k?key=LU5ENmVFWWdxeU1ERFJuLU9tYTF4Q05JMl8yQWpB"
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.maskalenkas.com.br/"
        />
        <meta
          property="twitter:title"
          content="Arthur Maskalenkas - Curriculo"
        />
        <meta
          property="twitter:description"
          content="Um curriculo de um desenvolvedor Front End, fã Javascript, React e novas tecnologias."
        />
        <meta
          property="twitter:image"
          content="https://photos.google.com/share/AF1QipOYiszrh1KdeiscQToYBK6D4_WOu5ChhswpbYQ5NNy979T2IQgachzXDmLmG8RETQ/photo/AF1QipPUJ-nXjdWQVrMsIuNLsL89pjTcfOGBMO-G7Y3k?key=LU5ENmVFWWdxeU1ERFJuLU9tYTF4Q05JMl8yQWpB"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
