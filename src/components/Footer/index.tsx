import * as S from './styles'

import Heading from 'components/Heading'
import Icons from 'components/Icons'

import { Coffee, Heart } from '@styled-icons/boxicons-solid'
import IconsWrapper from 'components/IconsWrapper'

const Footer = () => (
  <S.Wrapper role="contentinfo">
    <S.Text asTextType="text" color="white" weight="light" size="xlarge">
      Feito com muito
    </S.Text>
    <IconsWrapper
      icon="Coffee"
      color="white"
      size="2.2rem"
      hoverColor="black"
      sizeMedia="1.5rem"
      relativeY="-0.2rem"
    />
    <S.Text asTextType="text" color="white" weight="light" size="xlarge">
      e
    </S.Text>
    <IconsWrapper
      icon="Heart"
      color="white"
      size="2.2rem"
      hoverColor="red"
      sizeMedia="1.5rem"
      relativeY="-0.2rem"
    />
    <S.Text asTextType="text" color="white" weight="light" size="xlarge">
      por Arthur Maskalenkas
    </S.Text>
  </S.Wrapper>
)

export default Footer
