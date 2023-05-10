import React from "react";
import {
  DivTitulo,
  HeaderComponent,
  HeaderIcone,
  HeaderLiItem,
  HeaderLogo,
  HeaderLogoMobile,
  HeaderMenuNav,
  HeaderMenuNavPerfil,
  LinkComIcone,
  TextoLinks,
} from "./stylesHeader";
import logo from "../../Img/logo.png";
import IconeLista from "../../Img/Lista.svg";
import IconeUsuario from "../../Img/Usuario.svg";
import MenuHamburguer from "./MenuHamburguer";

const Header = ({ texto }) => {
  const [menuMobile, setMenuMobile] = React.useState("");
  return (
    <>
      <HeaderComponent>
        <MenuHamburguer menuMobile={menuMobile} setMenuMobile={setMenuMobile} />
        <HeaderLogo src={logo} alt="logo" />
        <HeaderLogoMobile src={logo} alt="logo mobile" />
        <HeaderMenuNav className={menuMobile}>
          <HeaderLiItem>Categorias</HeaderLiItem>
          <HeaderLiItem>Favoritos</HeaderLiItem>
          <HeaderLiItem>Meus Jogos</HeaderLiItem>
        </HeaderMenuNav>
        <HeaderMenuNavPerfil>
          <LinkComIcone href="#">
            <HeaderIcone src={IconeLista} alt="icone Lista" />
            <TextoLinks>Minha Lista</TextoLinks>
          </LinkComIcone>
          <LinkComIcone href="#">
            <HeaderIcone src={IconeUsuario} alt="icone perfil" />
            <TextoLinks>Meu Perfil</TextoLinks>
          </LinkComIcone>
        </HeaderMenuNavPerfil>
      </HeaderComponent>
      <DivTitulo>
        <h1>Tela de cadastro</h1>
      </DivTitulo>
    </>
  );
};
export default Header;
