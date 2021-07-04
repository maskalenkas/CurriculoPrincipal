import Heading from 'components/Heading'
import SocialLinks from 'components/SocialLinks'

import * as S from './styles'

export type AboutMeProps = {
  image?: string
}

const AboutMe = ({ image }: AboutMeProps) => (
  <S.Wrapper>
    <S.Column>
      <S.Photo src={image} alt="imagem de perfil" />
    </S.Column>

    <S.Column displayColumn>
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

      <S.Biography>
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

      <S.SocialLinksWrapper>
        <Heading asTextType="subtitle">Social Links</Heading>
        <SocialLinks />
      </S.SocialLinksWrapper>
    </S.Column>
  </S.Wrapper>
)

export default AboutMe
