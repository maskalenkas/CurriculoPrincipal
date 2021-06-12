import { colorTypes, sizeTypes } from 'components/Heading'
import * as S from './styles'

export type IconsProps = {
  color: colorTypes
  size: sizeTypes | string
  sizeMedia?: sizeTypes | string
  children?: React.ReactNode
  hoverColor?: colorTypes
  isScale?: boolean
  marginTop?: string
  Top?: string
}

const Icons = ({
  color,
  size,
  children,
  hoverColor,
  isScale,
  sizeMedia,
  marginTop,
  Top,
}: IconsProps) => (
  <S.Wrapper
    color={color}
    size={size}
    hoverColor={hoverColor}
    isScale={isScale}
    sizeMedia={sizeMedia}
    marginTop={marginTop}
    Top={Top}
  >
    {children}
  </S.Wrapper>
)

export default Icons
