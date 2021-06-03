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
      <S.JSWrapper />
      <S.HTMLWrapper />
      <S.CypressWrapper />
      <S.GitWrapper />
      <S.CSSWrapper />
      <S.ReactWrapper />
      <S.TestingLibraryWrapper />
      <S.BootstrapWrapper />
    </S.Content>
  </S.Wrapper>
)

export default Skills
