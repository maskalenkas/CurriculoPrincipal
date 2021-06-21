import * as S from './styles'

import Heading from 'components/Heading'
import Icons from 'components/Icons'

import { Coffee, Heart } from '@styled-icons/boxicons-solid'

const Footer = () => (
  <S.Wrapper role="contentinfo">
    <S.Text asTextType="text" color="white" weight="light" size="xxlarge">
      Feito com muito, mas muito{' '}
      <Icons
        color="white"
        size="3.1rem"
        Top="-0.5rem"
        hoverColor="black"
        sizeMedia="2.5rem"
      >
        <Coffee title="Xicara de café" />
      </Icons>{' '}
      e{' '}
      <Icons
        color="white"
        size="3.1rem"
        Top="-0.5rem"
        hoverColor="red"
        sizeMedia="2.5rem"
      >
        <Heart title="Coração em forma de amor" />
      </Icons>{' '}
      por Arthur Maskalenkas
    </S.Text>
  </S.Wrapper>
)

export default Footer