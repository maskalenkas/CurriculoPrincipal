import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import * as S from './styles'

//https://www.saltycrane.com/cheat-sheets/typescript/react/latest/
// Componente pode receber href, onclick...
type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large'
  icon?: JSX.Element
  children?: string
  as?: React.ElementType
} & ButtonTypes

const Button = ({ children, icon, size = 'medium', ...props }: ButtonProps) => (
  <S.Wrapper size={size} hasIcon={!!icon} {...props}>
    {icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default Button
