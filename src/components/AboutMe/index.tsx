import Heading from 'components/Heading'
import * as S from './styles'

export type DataProps = {
  coluna: string
  data: string
}

export type AboutMeProps = {
  image?: string
  data?: DataProps[]
}

const AboutMe = ({ image, data }: AboutMeProps) => (
  <S.Wrapper>
    {/* Photo init */}
    <S.Photo src={image} alt="imagem de perfil" />
    {/* Photo end */}

    {/* Biohraphy init */}
    <S.Biography>
      <Heading asTextType="title">Arthur Maskalenkas</Heading>
      <Heading asTextType="subtitle">Web Developer</Heading>
      <Heading asTextType="text">
        Prazer, meu nome é Arthur Maskalenkas. Sou um Web Developer com 7 meses
        de aprendizados constantes. Tenho bastante conhecimento em HTML5, CSS,
        JavaScript, React, NextJS, testes unitarios e outras diversas
        bibliotecas. O meu aprendizado é constante, junto com a força de
        vontade.
      </Heading>
      {/* div colunas age... */}

      <S.Data aria-label="Varias colunas com informações sobre o Arthur">
        {data!.map((d) => (
          <S.Column key={d.coluna} className="coluna">
            <Heading asTextType="subtitle">{d.coluna}</Heading>
            <Heading asTextType="text">{d.data}</Heading>
          </S.Column>
        ))}
      </S.Data>

      {/* Social links */}
    </S.Biography>
    {/* Biohraphy end */}
  </S.Wrapper>
)

export default AboutMe
