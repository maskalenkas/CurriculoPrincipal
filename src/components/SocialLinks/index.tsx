import * as S from './styles'

import {
  Facebook,
  Instagram,
  Linkedin,
  Github,
  Whatsapp,
} from '@styled-icons/boxicons-logos'

const SocialLinks = () => (
  <S.Wrapper>
    <S.IconWrapper content="Facebook">
      <Facebook aria-label="icone do Facebook" />
      <span>Facebook</span>
    </S.IconWrapper>

    <S.IconWrapper content="Instagram">
      <Instagram aria-label="icone do Instagram" />
      <span>Instagram</span>
    </S.IconWrapper>

    <S.IconWrapper content="Linkedin">
      <Linkedin aria-label="icone do Linkedin" />
      <span>Linkedin</span>
    </S.IconWrapper>

    <S.IconWrapper content="Whatsapp">
      <Whatsapp aria-label="icone do Whatsapp" />
      <span>Whatsapp</span>
    </S.IconWrapper>

    <S.IconWrapper content="Github">
      <Github aria-label="icone do Github" />
      <span>GitHub</span>
    </S.IconWrapper>
  </S.Wrapper>
)

export default SocialLinks
