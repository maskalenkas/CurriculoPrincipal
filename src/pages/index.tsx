import Home, { HomeTemplateProps } from 'templates/Home';
export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />;
}

export function getStaticProps() {
  // faz lógica como:
  // pode buscar dados numa API
  // fazer calculo|leitura de context

  // retorno dos dados
  return {
    props: {
      title: 'React avançado',
      description: 'TypeScript, ReactJS, NextJS e Styled Components',
    },
  };
}
