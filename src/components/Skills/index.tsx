import Heading from 'components/Heading'
import * as S from './styles'

import {
  Testinglibrary,
  Cypress,
  StyledComponents,
} from '@styled-icons/simple-icons'

const Skills = () => (
  <S.Wrapper>
    <S.Title>
      <Heading
        asTextType="title"
        color="white"
        font="ptsams"
        weight="light"
        size="xxlarge"
      >
        MINHAS SKILLS
      </Heading>
    </S.Title>

    <S.Content>
      <S.IconWrapper>
        <S.JSWrapper aria-label="Icone do Javascript" />
        <Heading>Javascript</Heading>
      </S.IconWrapper>
      <S.IconWrapper>
        <S.HTMLWrapper aria-label="Icone do HTML5" />
        <Heading>HTML5</Heading>
      </S.IconWrapper>
      <S.IconWrapper iconSize="8rem">
        <S.CypressWrapper aria-label="Icone do Cypress" />
        <Heading>Cypress</Heading>
      </S.IconWrapper>
      <S.IconWrapper>
        <S.GitWrapper aria-label="Icone do GIT" />
        <Heading>GIT</Heading>
      </S.IconWrapper>
      <S.IconWrapper>
        <S.CSSWrapper aria-label="Icone do CSS3" />
        <Heading>CSS3</Heading>
      </S.IconWrapper>
      <S.IconWrapper>
        <S.ReactWrapper aria-label="Icone do React" />
        <Heading>React</Heading>
      </S.IconWrapper>
      <S.IconWrapper>
        <S.TestingLibraryWrapper aria-label="Icone da TestingLibrary" />
        <Heading>Testing Library</Heading>
      </S.IconWrapper>
      <S.IconWrapper>
        <S.BootstrapWrapper aria-label="Icone do Bootstrap" />
        <Heading>Bootstrap</Heading>
      </S.IconWrapper>
    </S.Content>
  </S.Wrapper>
)

export default Skills
