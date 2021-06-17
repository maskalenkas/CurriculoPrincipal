import { colorTypes, sizeTypes } from 'components/Heading'
import * as S from './styles'

// Incluir title e label: svg
// Fazer testes para localizar eles

export type IconsProps = {
  title?: string
  color?: colorTypes
  colorNoDefault?: string
  size: sizeTypes | string
  sizeMedia?: sizeTypes | string
  children?: React.ReactNode
  hoverColor?: colorTypes
  isScale?: boolean
  marginTop?: string
  Top?: string
}

const Icons = ({
  title,
  color,
  size,
  children,
  hoverColor,
  isScale,
  sizeMedia,
  marginTop,
  Top,
  colorNoDefault,
}: IconsProps) => (
  <S.Wrapper
    color={color}
    size={size}
    hoverColor={hoverColor}
    isScale={isScale}
    sizeMedia={sizeMedia}
    marginTop={marginTop}
    Top={Top}
    colorNoDefault={colorNoDefault}
    title={title}
  >
    {children}
  </S.Wrapper>
)

export default Icons
