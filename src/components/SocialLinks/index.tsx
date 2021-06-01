import * as S from './styles'

import { Facebook, Instagram, Linkedin } from '@styled-icons/boxicons-logos'

const SocialLinks = () => (
  <S.Wrapper>
    <S.IconWrapper content="Facebook">
      <Facebook aria-label="icone do Facebook" />
    </S.IconWrapper>

    <S.IconWrapper content="Instagram">
      <Instagram aria-label="icone do Instagram" />
    </S.IconWrapper>

    <S.IconWrapper content="Linkedin">
      <Linkedin aria-label="icone do Linkedin" />
    </S.IconWrapper>
  </S.Wrapper>
)

export default SocialLinks
