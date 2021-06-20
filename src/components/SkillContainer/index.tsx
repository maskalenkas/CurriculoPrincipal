import Heading from 'components/Heading'
import * as S from './styles'

import { Check } from '@styled-icons/boxicons-regular'
import Icons from 'components/Icons'
import ContainerSkill from 'components/ContainerSkill'

type skillList = {
  skill: string
}

export type SkillContainerProps = {
  title: string
  items: skillList[]
}

const SkillContainer = ({ title, items }: SkillContainerProps) => (
  <ContainerSkill title={title}>
    <S.List>
      {items.map((item) => (
        <S.ListItemIconWrapper key={item.skill}>
          <Icons
            size="2.8rem"
            color="green"
            marginTop="-0.5rem"
            title="icon Checked"
          >
            <Check />
          </Icons>
          <S.ListItem>{item.skill}</S.ListItem>
        </S.ListItemIconWrapper>
      ))}
    </S.List>
  </ContainerSkill>
)

export default SkillContainer
