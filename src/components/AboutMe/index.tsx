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
        <S.NameWrapper>
          <Heading asTextType="title" color="primary">
            Arthur Maskalenkas{' '}
          </Heading>
        </S.NameWrapper>

        <S.SubtitleWrapper>
          <Heading asTextType="subtitle" marginBottom="small">
            Web Developer
          </Heading>
        </S.SubtitleWrapper>
        <Heading asTextType="text" marginBottom="small">
          Prazer, meu nome é Arthur Maskalenkas. Sou um Web Developer com 10
          meses de aprendizado. Tenho bastante conhecimento no ecossistema em
          volta do React, incluindo NextJs. O meu aprendizado é constante, e a
          falta de experiencia é compensada com uma força de vontade enorme em
          aprender, sem contar que eu não consigo me ver fazendo outra coisa a
          não ser programar. Programo para fins didaticos, programo como hobby,
          enfim, é a minha paixão.
        </Heading>
      </S.Biography>

      <S.Data aria-label="Varias colunas com informações sobre o Arthur">
        {data?.map((d) => (
          <S.Column key={d.coluna} className="coluna">
            <Heading asTextType="subtitle" size="medium">
              {d.coluna}
            </Heading>
            <Heading asTextType="text">{d.data}</Heading>
          </S.Column>
        ))}
      </S.Data>
      <S.SocialLinksWrapper>
        <Heading asTextType="subtitle">Social Links</Heading>
        <SocialLinks />
      </S.SocialLinksWrapper>
    </S.Column>
  </S.Wrapper>
)

export default AboutMe
