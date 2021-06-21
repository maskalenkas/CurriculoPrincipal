import Home from 'templates/Home'

export default function Index() {
  return <Home />
}

export function getStaticProps() {
  // faz lógica como:
  // pode buscar dados numa API
  // fazer calculo|leitura de context

  // retorno dos dados
  return {
    props: {},
  }
}
