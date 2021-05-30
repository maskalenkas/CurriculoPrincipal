import * as S from './styles'

export type colorTypes = 'primary' | 'secondary' | 'black'
export type sizeTypes = 'small' | 'medium'
export type weightTypes = 'light' | 'normal' | 'bold'

export type HeadingProps = {
  children: React.ReactNode
  color?: colorTypes
  size?: sizeTypes
  weight?: weightTypes
}

const Heading = ({
  children,
  color = 'black',
  size = 'medium',
  weight = 'light',
}: HeadingProps) => (
  <S.Wrapper color={color} size={size} weight={weight}>
    {children}
  </S.Wrapper>
)

export default Heading
