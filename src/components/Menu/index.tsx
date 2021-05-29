import * as S from './styles'

const Menu = () => (
  <S.Wrapper>
    {/* Menu logo init  */}
    <S.MenuLogo>Arthur maskalenkas</S.MenuLogo>
    {/* Menu logo end  */}

    {/* Menu nav init  */}
    <S.MenuNav>
      <S.MenuLink>Sobre</S.MenuLink>
      <S.MenuLink>Portfolio</S.MenuLink>
      <S.MenuLink>Contato</S.MenuLink>
      <S.MenuLink>Habilidades</S.MenuLink>
    </S.MenuNav>
    {/* Menu nav end  */}

    {/* Menu full init*/}
    <S.MenuFull></S.MenuFull>
    {/* Menu full end */}
  </S.Wrapper>
)

export default Menu
