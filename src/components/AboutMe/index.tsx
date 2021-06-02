import Heading from 'components/Heading'
import SocialLinks from 'components/SocialLinks'
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
    <S.Column>
      <S.Photo src={image} alt="imagem de perfil" />
    </S.Column>

    <S.Column displayColumn>
      <S.Biography>
        <Heading asTextType="title">Ola, eu sou o Arthur Maskalenkas</Heading>
        <Heading asTextType="subtitle">Web Developer</Heading>
        <Heading asTextType="text">
          Prazer, meu nome é Arthur Maskalenkas. Sou um Web Developer com 7
          meses de aprendizados constantes. Tenho bastante conhecimento em
          HTML5, CSS, JavaScript, React, NextJS, testes unitarios e outras
          diversas bibliotecas. O meu aprendizado é constante, e as experiencias
          não vividas ainda são compensadas com uma força de vontade enorme em
          aprender e ser melhor que eu mesmo.
        </Heading>

        <S.Data aria-label="Varias colunas com informações sobre o Arthur">
          {data?.map((d) => (
            <S.Column key={d.coluna} className="coluna">
              <Heading asTextType="subtitle">{d.coluna}</Heading>
              <Heading asTextType="text">{d.data}</Heading>
            </S.Column>
          ))}
        </S.Data>
      </S.Biography>
      <Heading asTextType="subtitle">Social Links</Heading>
      <SocialLinks />
    </S.Column>
  </S.Wrapper>
)

export default AboutMe
