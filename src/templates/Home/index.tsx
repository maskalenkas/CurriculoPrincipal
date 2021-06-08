import AboutMe from 'components/AboutMe'
import BannerSlider from 'components/BannerSlider'
import { Container } from 'components/Container'
import Skills from 'components/Skills'
import * as S from './styles'

import mockSlider from 'components/BannerSlider/mock'
import mockAboutMe from 'components/AboutMe/mock'

import Heading from 'components/Heading'
import Contact from 'components/Contact'

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

    <S.SectionContact>
      <Heading asTextType="title" color="primary" weight="light">
        CONTATO
      </Heading>

      <S.MarkBg>
        <Container>
          <Contact />
        </Container>
      </S.MarkBg>
    </S.SectionContact>
  </S.Sections>
)

export default Home
