import AboutMe from 'components/AboutMe'
import BannerSlider from 'components/BannerSlider'
import { Container } from 'components/Container'
import Skills from 'components/Skills'
import * as S from './styles'

import mockSlider from 'components/BannerSlider/mock'
import mockAboutMe from 'components/AboutMe/mock'

import Heading from 'components/Heading'
import Contact from 'components/Contact'
import Footer from 'components/Footer'

const Home = () => (
  <S.Sections>
    <Container>
      <S.SectionAboutMe>
        <AboutMe image="/img/fotocurrc.jpg" data={mockAboutMe} />
      </S.SectionAboutMe>
    </Container>

    {/* Portfolio */}
    <S.SectionPortfolio>
      <S.TitleWrapper>
        <Heading asTextType="title" color="primary" weight="light">
          Meus projetos
        </Heading>
      </S.TitleWrapper>

      <Container>
        <BannerSlider items={mockSlider} />
      </Container>
    </S.SectionPortfolio>
    {/* / Portfolio */}

    {/* Skills */}
    <S.SectionSkills>
      <S.TitleWrapper>
        <Heading asTextType="title" color="primary" weight="light">
          Conhecimentos
        </Heading>
      </S.TitleWrapper>

      <Container>
        <Skills />
      </Container>
    </S.SectionSkills>
    {/* / Skills */}

    {/* Contact */}
    <S.SectionContact>
      <S.TitleWrapper>
        <Heading asTextType="title" color="primary" weight="light">
          Contato
        </Heading>
      </S.TitleWrapper>

      <S.MarkBg>
        <Container>
          <Contact />
        </Container>
      </S.MarkBg>
    </S.SectionContact>
    {/* / Contact */}

    {/* Footer */}
    <S.FooterWrapper>
      <S.MarkBg colorBg="primary">
        <Container>
          <Footer />
        </Container>
      </S.MarkBg>
    </S.FooterWrapper>
    {/* / Footer */}
  </S.Sections>
)

export default Home
