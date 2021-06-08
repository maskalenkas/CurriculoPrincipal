import AboutMe from 'components/AboutMe'
import BannerSlider from 'components/BannerSlider'
import { Container } from 'components/Container'
import Skills from 'components/Skills'
import * as S from './styles'

import mockSlider from 'components/BannerSlider/mock'
import mockAboutMe from 'components/AboutMe/mock'

import Heading from 'components/Heading'

const Home = () => (
  <S.Sections>
    <Container>
      <S.SectionAboutMe>
        <AboutMe image="/img/fotocurrc.jpg" data={mockAboutMe} />
      </S.SectionAboutMe>
    </Container>

    <Container>
      <Heading asTextType="title" color="primary" weight="light">
        Meus projetos
      </Heading>
      <S.SectionPortfolio>
        <BannerSlider items={mockSlider} />
      </S.SectionPortfolio>
    </Container>

    <Container>
      <Heading asTextType="title" color="primary" weight="light">
        Minhas habilidades
      </Heading>
      <S.SectionSkills>
        <Skills />
      </S.SectionSkills>
    </Container>

    <Container>
      <S.SectionContact></S.SectionContact>
    </Container>
  </S.Sections>
)

export default Home
