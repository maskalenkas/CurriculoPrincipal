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
  color: string
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
      {items.map((item) => (
        <S.IconWrapper key={item.name}>
          <Icons
            size="15rem"
            color="red"
            sizeMedia="6rem"
            colorNoDefault={item.color}
            isScale
          >
            {item.icon.render()}
          </Icons>
          <Heading>{item.name}</Heading>
        </S.IconWrapper>
      ))}
    </S.Content>
  </S.Wrapper>
)

export default Skills
