import * as S from './styles'

import Heading from 'components/Heading'

const Contact = () => (
  <S.Wrapper>
    <S.IconWrapper>
      <S.IconContactCard aria-label="um icone de contato" />
    </S.IconWrapper>

    <S.Content>
      <Heading asTextType="title" color="secondary" weight="bold">
        Vamos criar algo incrivel?
      </Heading>
      <Heading asTextType="subtitle" color="secondary">
        A melhor forma de contato é através do meu Whatsapp
      </Heading>
      <S.IconWrapper>
        <S.IconWhatsapp />
      </S.IconWrapper>
    </S.Content>
  </S.Wrapper>
)

export default Contact
