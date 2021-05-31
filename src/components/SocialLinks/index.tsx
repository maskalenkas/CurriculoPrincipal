import * as S from './styles'

import { Facebook, Instagram, Linkedin } from '@styled-icons/entypo-social'

const SocialLinks = () => (
  <S.Wrapper>
    <S.IconWrapper>
      <Facebook />
    </S.IconWrapper>
    <S.IconWrapper>
      <Instagram />
    </S.IconWrapper>
    <S.IconWrapper>
      <Linkedin />
    </S.IconWrapper>
  </S.Wrapper>
)

export default SocialLinks
