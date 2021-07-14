import * as S from './styles'

import ContainerSkill from 'components/ContainerSkill'
import IconsWrapper from 'components/IconsWrapper'

export type SkillContainerProps = {
  title: string
  items: string[]
}

const SkillContainer = ({ title, items }: SkillContainerProps) => (
  <ContainerSkill title={title}>
    <S.List>
      {items.map((item) => (
        <S.ListItemIconWrapper key={item}>
          <IconsWrapper
            icon="Checked"
            size="2.8rem"
            color="green"
            relativeY="-0.5rem"
          />
          <S.ListItem>{item}</S.ListItem>
        </S.ListItemIconWrapper>
      ))}
    </S.List>
  </ContainerSkill>
)

export default SkillContainer
