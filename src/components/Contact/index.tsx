import * as S from './styles'

import Heading from 'components/Heading'
import Icons from 'components/Icons'

import { ContactCard } from '@styled-icons/fluentui-system-filled'
import { Whatsapp } from '@styled-icons/boxicons-logos'
import IconsWrapper from 'components/IconsWrapper'

const Contact = () => (
  <S.Wrapper>
    <IconsWrapper
      icon="ContactCard"
      color="primary"
      size="15rem"
      sizeMedia="12rem"
      isScale
    />

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

      {/* Gambiarra para não tipar icons */}
      <div
        onClick={() =>
          (window.location.href =
            'https://wa.me/+55011976660220?text=Tudo%20Bem?')
        }
      >
        <IconsWrapper
          icon="Whatsapp"
          color="green"
          size="10rem"
          sizeMedia="7rem"
          isScale
        />
      </div>
    </S.Content>
  </S.Wrapper>
)

export default Contact
