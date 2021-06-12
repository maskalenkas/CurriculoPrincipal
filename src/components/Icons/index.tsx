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
}

const Icons = ({
  color,
  size,
  children,
  hoverColor,
  isScale,
  sizeMedia,
  marginTop,
}: IconsProps) => (
  <S.Wrapper
    color={color}
    size={size}
    hoverColor={hoverColor}
    isScale={isScale}
    sizeMedia={sizeMedia}
    marginTop={marginTop}
  >
    {children}
  </S.Wrapper>
)

export default Icons
