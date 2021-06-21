import * as S from './styles'

import Heading from 'components/Heading'
import Icons from 'components/Icons'

import { ContactCard } from '@styled-icons/fluentui-system-filled'
import { Whatsapp } from '@styled-icons/boxicons-logos'

const Contact = () => (
  <S.Wrapper>
    <Icons
      color="primary"
      size="15rem"
      sizeMedia="12rem"
      isScale
      title="icon Contact"
    >
      <ContactCard />
    </Icons>

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

      <Icons
        color="green"
        size="10rem"
        sizeMedia="7rem"
        marginTop="1.5rem"
        isScale
        title="icon Whatsapp"
      >
        <Whatsapp />
      </Icons>
    </S.Content>
  </S.Wrapper>
)

export default Contact