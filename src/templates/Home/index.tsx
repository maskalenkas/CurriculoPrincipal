import AboutMe from 'components/AboutMe'
import BannerSlider from 'components/BannerSlider'
import { Container } from 'components/Container'
import Skills from 'components/Skills'
import * as S from './styles'

import mockSlider from 'components/BannerSlider/mock'
import mockAboutMe from 'components/AboutMe/mock'
import mockSkills from 'components/Skills/mock'
import {
  HardSkills as mockHardSkills,
  SoftSkills as mockSoftSkills,
} from 'components/SkillContainer/mock'

import Heading from 'components/Heading'
import Contact from 'components/Contact'
import Footer from 'components/Footer'
import SkillContainer from 'components/SkillContainer'

const Home = () => (
  <S.Sections>
    <Container>
      <S.SectionAboutMe>
        <AboutMe image="/img/computers.svg" data={mockAboutMe} />
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

    {/* Conhecimentos */}
    <S.SectionConhecimentos>
      <S.TitleWrapper>
        <Heading asTextType="title" color="primary" weight="light">
          Conhecimentos
        </Heading>
      </S.TitleWrapper>

      <Container>
        <Skills items={mockSkills} />
      </Container>
    </S.SectionConhecimentos>
    {/* / Conhecimentos */}

    {/* Skills */}
    <S.SectionSkills>
      <S.TitleWrapper>
        <Heading asTextType="title" color="primary" weight="light">
          Skills
        </Heading>
      </S.TitleWrapper>

      <Container>
        {/* Container Skills */}
        <S.ContainerSkills>
          {/* Coluna 1 */}
          <S.ColumnSkills>
            <SkillContainer title="Hard skills" items={mockHardSkills} />
          </S.ColumnSkills>
          {/* / Coluna 1 */}

          {/* Coluna 2 */}
          <S.ColumnSkills>
            <SkillContainer title="Soft skills" items={mockSoftSkills} />
          </S.ColumnSkills>
          {/* / Coluna 2 */}
        </S.ContainerSkills>
        {/* / Container Skills */}
      </Container>
    </S.SectionSkills>
    {/* / SKills */}

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
