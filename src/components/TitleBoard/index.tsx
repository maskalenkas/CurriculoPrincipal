import { ReactNode } from 'react'
import * as S from './styles'

export type TitleBoardProps = {
  children: ReactNode
}

const TitleBoard = ({ children }: TitleBoardProps) => (
  <S.Wrapper>
    <S.Title>{children}</S.Title>
  </S.Wrapper>
)

export default TitleBoard
