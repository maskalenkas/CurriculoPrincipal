import * as S from './styles'

export type colorTypes =
  | 'green'
  | 'red'
  | 'primary'
  | 'secondary'
  | 'black'
  | 'gray'
  | 'darkGray'
  | 'white'
export type sizeTypes = 'small' | 'medium' | 'xlarge' | 'xxlarge' | 'xxxlarge'
export type weightTypes = 'light' | 'normal' | 'bold'
export type asTypes = 'text' | 'title' | 'subtitle'
export type fontTypes = 'ptsams' | 'oswald'
export type marginBottomTypes =
  | 'xsmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'xlarge'
  | 'xxlarge'

export type HeadingProps = {
  asTextType?: asTypes
  children: React.ReactNode
  size?: sizeTypes
  color?: colorTypes
  weight?: weightTypes
  font?: fontTypes
  marginBottom?: marginBottomTypes
}

const Heading = ({
  children,
  asTextType = 'text',
  size,
  color,
  weight,
  font,
  marginBottom,
}: HeadingProps) => (
  <S.Wrapper
    asTextType={asTextType}
    size={size}
    color={color}
    weight={weight}
    font={font}
    marginBottom={marginBottom}
  >
    {children}
  </S.Wrapper>
)

export default Heading
