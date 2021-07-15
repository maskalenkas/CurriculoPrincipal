import * as S from './styles'

import Heading from 'components/Heading'

import IconsWrapper from 'components/IconsWrapper'

const Contact = () => (
  <S.Wrapper>
    <IconsWrapper
      icon="ContactCard"
      color="primary"
      size="15rem"
      sizeMedia="10rem"
      isScale
    />

    <S.Content>
      <Heading asTextType="title" color="secondary" weight="bold" size="xlarge">
        Vamos criar algo incrivel?
      </Heading>
      <Heading asTextType="subtitle" color="secondary" size="large">
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
          sizeMedia="6rem"
          isScale
        />
      </div>
    </S.Content>
  </S.Wrapper>
)

export default Contact
