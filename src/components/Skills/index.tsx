import Heading from 'components/Heading'
import * as S from './styles'

import Icons from 'components/Icons'
import ContainerSkill from 'components/ContainerSkill'

type skillList = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any
  name: string
  color: string
  title: string
}

export type SkillsProps = {
  items: skillList[]
}

const Skills = ({ items }: SkillsProps) => (
  <ContainerSkill title="Tecnologias">
    <S.Content>
      {items.map((item) => (
        <S.IconWrapper key={item.name}>
          <Icons
            size="15rem"
            color="red"
            sizeMedia="5rem"
            colorNoDefault={item.color}
            isScale
            title={item.title}
          >
            {item.icon.render()}
          </Icons>
          <Heading>{item.name}</Heading>
        </S.IconWrapper>
      ))}
    </S.Content>
  </ContainerSkill>
)

export default Skills
