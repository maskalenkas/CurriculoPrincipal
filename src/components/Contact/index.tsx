import * as S from './styles'

import Heading from 'components/Heading'

const Contact = () => (
  <S.Wrapper>
    <S.IconContactCard aria-label="icone de um contato" />

    <S.Content>
      <Heading
        asTextType="title"
        color="secondary"
        weight="bold"
        size="xxlarge"
      >
        Vamos criar algo incrivel?
      </Heading>
      <Heading asTextType="subtitle" color="secondary">
        A melhor forma de contato é através do meu Whatsapp
      </Heading>

      <S.IconWhatsapp aria-label="Icone do Whatsapp" />
    </S.Content>
  </S.Wrapper>
)

export default Contact
