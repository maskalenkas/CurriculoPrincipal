import * as S from './styles'

export type colorTypes = 'primary' | 'secondary' | 'black' | 'gray' | 'darkGray'
export type sizeTypes = 'small' | 'medium' | 'xlarge' | 'xxlarge'
export type weightTypes = 'light' | 'normal' | 'bold'
export type asTypes = 'text' | 'title' | 'subtitle'

export type HeadingProps = {
  asTextType?: asTypes
  children: React.ReactNode
  size?: sizeTypes
  color?: colorTypes
  weight?: weightTypes
}

const Heading = ({
  children,
  asTextType = 'text',
  size,
  color,
  weight,
}: HeadingProps) => (
  <S.Wrapper asTextType={asTextType} size={size} color={color} weight={weight}>
    {children}
  </S.Wrapper>
)

export default Heading
