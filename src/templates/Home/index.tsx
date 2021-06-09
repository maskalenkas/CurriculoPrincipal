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

    {/* Portfolio */}
    <S.SectionPortfolio>
      <Heading asTextType="title" color="primary" weight="light">
        Meus projetos
      </Heading>

      <Container>
        <BannerSlider items={mockSlider} />
      </Container>
    </S.SectionPortfolio>
    {/* / Portfolio */}

    {/* Skills */}
    <S.SectionSkills>
      <Heading asTextType="title" color="primary" weight="light">
        Minhas habilidades
      </Heading>

      <Container>
        <Skills />
      </Container>
    </S.SectionSkills>
    {/* / Skills */}

    {/* Contact */}
    <S.SectionContact>
      <Heading asTextType="title" color="primary" weight="light">
        Contato
      </Heading>

      <S.MarkBg>
        <Container>
          <Contact />
        </Container>
      </S.MarkBg>
    </S.SectionContact>
    {/* / Contact */}

    {/* Footer */}
    <S.FooterWrapper></S.FooterWrapper>
    {/* / Footer */}
  </S.Sections>
)

export default Home
