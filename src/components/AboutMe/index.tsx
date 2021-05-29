import Heading from 'components/Heading'
import * as S from './styles'

export type AboutMeProps = {
  image: string
}

const AboutMe = ({ image }: AboutMeProps) => (
  <S.Wrapper>
    {/* Photo init */}
    <S.Photo src={image} />
    {/* Photo end */}

    {/* Biohraphy init */}
    <S.Biography>
      {/* Heading */}
      <Heading color="secondary">Arthur Maskalenkas</Heading>
      {/* SubHeading */}
      <Heading color="secondary" size="small">
        Web Developer
      </Heading>
      {/* Texto */}
      <Heading size="small" color="black">
        Prazer, meu nome é Arthur Maskalenkas. Sou um Web Developer com 7 meses
        de aprendizados constantes. Tenho bastante conhecimento em HTML5, CSS,
        JavaScript, React, NextJS, testes unitarios e diversas bibliotecas.
      </Heading>
      {/* div colunas age... */}
      {/* Social links */}
    </S.Biography>
    {/* Biohraphy end */}
  </S.Wrapper>
)

export default AboutMe
