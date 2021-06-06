import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import * as S from './styles'

//https://www.saltycrane.com/cheat-sheets/typescript/react/latest/

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large'
  icon?: JSX.Element
  children?: string
}

const Button = ({ children, icon, size = 'medium' }: ButtonProps) => (
  <S.Wrapper size={size} hasIcon={!!icon}>
    {icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default Button
