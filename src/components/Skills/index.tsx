import Heading from 'components/Heading'
import * as S from './styles'

// graphql, nextjs, storybook, strapi

import {
  Testinglibrary,
  Cypress,
  StyledComponents,
} from '@styled-icons/simple-icons'
import Icons from 'components/Icons'

type skillList = {
  icon: any
  name: string
}

export type SkillsProps = {
  items: skillList[]
}

const Skills = ({ items }: SkillsProps) => (
  <S.Wrapper>
    <S.Title>
      <Heading
        asTextType="title"
        color="white"
        font="ptsams"
        weight="light"
        size="xxlarge"
      >
        TECNOLOGIAS
      </Heading>
    </S.Title>

    <S.Content>
      <S.IconWrapper>
        {items.map((item) => (
          <>
            <Icons size="15rem" color="red" sizeMedia="10rem">
              {item.icon.render()}
            </Icons>
            <Heading>{item.name}</Heading>
          </>
        ))}
      </S.IconWrapper>
    </S.Content>
  </S.Wrapper>
)

export default Skills
