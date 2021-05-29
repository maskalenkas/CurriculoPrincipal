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
      {/* ... */}
      {/* Texto */}
      {/* div colunas age... */}
      {/* Social links */}
    </S.Biography>
    {/* Biohraphy end */}
  </S.Wrapper>
)

export default AboutMe
