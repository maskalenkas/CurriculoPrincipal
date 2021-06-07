import * as S from './styles'

import {
  Facebook,
  Instagram,
  Linkedin,
  Github,
  Whatsapp,
} from '@styled-icons/boxicons-logos'
import { ButtonProps } from 'components/Button'

export type SocialLinkProps = {
  as?: React.ElementType
} & ButtonProps

// É que elemento? é um a, e ele pode receber o que? as props de A
const SocialLinks = ({ as, ...props }: SocialLinkProps) => (
  <S.Wrapper>
    <S.IconWrapper as="a" href="https://www.facebook.com/arthur.maskalenkas">
      <Facebook aria-label="icone do Facebook" />
      <span>Facebook</span>
    </S.IconWrapper>

    <S.IconWrapper
      as="a"
      href="https://www.linkedin.com/in/arthur-maskalenkas-915431214/"
    >
      <Linkedin aria-label="icone do Linkedin" />
      <span>Linkedin</span>
    </S.IconWrapper>

    <S.IconWrapper as="a" href="https://wa.me/+55011976660220?text=Tudo%20Bem?">
      <Whatsapp aria-label="icone do Whatsapp" />
      <span>Whatsapp</span>
    </S.IconWrapper>

    <S.IconWrapper as="a" href="https://github.com/maskalenkas">
      <Github aria-label="icone do Github" />
      <span>GitHub</span>
    </S.IconWrapper>
  </S.Wrapper>
)

export default SocialLinks
