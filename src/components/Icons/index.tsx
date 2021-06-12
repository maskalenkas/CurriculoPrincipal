import { colorTypes, sizeTypes } from 'components/Heading'
import * as S from './styles'

export type IconsProps = {
  color: colorTypes
  size: sizeTypes | string
  children?: React.ReactNode
  hoverColor?: colorTypes
  isScale?: boolean
}

const Icons = ({ color, size, children, hoverColor, isScale }: IconsProps) => (
  <S.Wrapper
    color={color}
    size={size}
    hoverColor={hoverColor}
    isScale={isScale}
  >
    {children}
  </S.Wrapper>
)

export default Icons
