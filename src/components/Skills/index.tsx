import Heading from 'components/Heading'
import * as S from './styles'

import ContainerSkill from 'components/ContainerSkill'
import IconsWrapper, { IconsProps } from 'components/IconsWrapper'

export type SkillsProps = {
  items: IconsProps[]
}

const Skills = ({ items }: SkillsProps) => (
  <ContainerSkill title="Tecnologias">
    <S.Content>
      {items.map((items) => (
        <S.IconWrapper key={items.icon}>
          <IconsWrapper
            icon={items.icon}
            size="15rem"
            isScale
            sizeMedia="4rem"
            color={items.color}
            colorNoDefault={items.colorNoDefault}
          />
          <Heading>{items.icon}</Heading>
        </S.IconWrapper>
      ))}
    </S.Content>
  </ContainerSkill>
)

export default Skills
