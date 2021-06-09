import * as S from './styles'

import Heading from 'components/Heading'

const Footer = () => (
  <S.Wrapper>
    <S.Text asTextType="text" color="white" weight="light" size="xxlarge">
      Feito com muito, mas muito <S.IconCoffee /> e <S.IconLove /> por Arthur
      Maskalenkas
    </S.Text>
  </S.Wrapper>
)

export default Footer
