import Heading from 'components/Heading'
import TitleBoard from 'components/TitleBoard'
import { ReactNode } from 'react'
import * as S from './styles'

export type ContainerSkillProps = {
  title: string
  children: ReactNode
}

const ContainerSkill = ({ children, title }: ContainerSkillProps) => (
  <S.Wrapper>
    <TitleBoard>
      <Heading
        asTextType="title"
        color="white"
        font="ptsams"
        weight="light"
        size="xxlarge"
      >
        {title}
      </Heading>
    </TitleBoard>
    {children}
  </S.Wrapper>
)

export default ContainerSkill
