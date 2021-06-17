import Heading from 'components/Heading'
import * as S from './styles'

import { Check } from '@styled-icons/boxicons-regular'
import Icons from 'components/Icons'

type skillList = {
  skill: string
}

export type SkillContainerProps = {
  title: string
  items: skillList[]
}

const SkillContainer = ({ title, items }: SkillContainerProps) => (
  <S.Wrapper>
    <S.Title>
      <Heading
        asTextType="title"
        color="white"
        font="ptsams"
        weight="light"
        size="xxlarge"
      >
        {title}
      </Heading>
    </S.Title>

    <S.List>
      {items.map((item) => (
        <S.ListItemIconWrapper key={item.skill}>
          <Icons size="2.8rem" color="green" marginTop="-0.5rem">
            <Check />
          </Icons>
          <S.ListItem>{item.skill}</S.ListItem>
        </S.ListItemIconWrapper>
      ))}
    </S.List>
  </S.Wrapper>
)

export default SkillContainer
