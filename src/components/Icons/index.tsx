import { colorTypes, sizeTypes } from 'components/Heading'
import * as S from './styles'

export type IconsProps = {
  color: colorTypes
  size: sizeTypes | string
  children?: React.ReactNode
  hoverColor?: colorTypes
}

const Icons = ({ color, size, children, hoverColor }: IconsProps) => (
  <S.Wrapper color={color} size={size} hoverColor={hoverColor}>
    {children}
  </S.Wrapper>
)

export default Icons
