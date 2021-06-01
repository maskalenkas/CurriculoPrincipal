import * as S from './styles'

export type colorTypes = 'primary' | 'secondary' | 'black'
export type sizeTypes = 'small' | 'medium'
export type weightTypes = 'light' | 'normal' | 'bold'
export type asTypes = 'text' | 'title' | 'subtitle'

export type HeadingProps = {
  children: React.ReactNode
  color?: colorTypes
  size?: sizeTypes
  weight?: weightTypes
  asTextType?: asTypes
  isBlue?: boolean
}

const Heading = ({
  children,
  color = 'black',
  size = 'medium',
  weight = 'light',
  asTextType,
  isBlue,
}: HeadingProps) => (
  <S.Wrapper
    color={color}
    size={size}
    weight={weight}
    asTextType={asTextType}
    isBlue={isBlue}
  >
    {children}
  </S.Wrapper>
)

export default Heading
