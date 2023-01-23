import React from "react";
import {
  DivTitulo,
  HeaderComponent,
  HeaderIcone,
  HeaderLiItem,
  HeaderLogo,
  HeaderMenuNav,
  LinkComIcone,
  TextoLinks,
} from "./stylesHeader";
import logo from "../../Img/logo.png";
import IconeLista from "../../Img/Lista.svg";
import IconeUsuario from "../../Img/Usuario.svg";
const Header = ({ texto }) => {
  return (
    <>
      <HeaderComponent>
        <HeaderMenuNav>
          <HeaderLogo src={logo} alt="logo" />
          <HeaderLiItem>Categorias</HeaderLiItem>
          <HeaderLiItem>Favoritos</HeaderLiItem>
          <HeaderLiItem>Meus Jogos</HeaderLiItem>
        </HeaderMenuNav>
        <HeaderMenuNav style={{ marginRight: "60px" }}>
          <LinkComIcone href="#">
            <HeaderIcone src={IconeLista} alt="icone Lista" />
            <TextoLinks>Minha Lista</TextoLinks>
          </LinkComIcone>
          <LinkComIcone href="#">
            <HeaderIcone src={IconeUsuario} alt="icone perfil" />
            <TextoLinks>Meu Perfil</TextoLinks>
          </LinkComIcone>
        </HeaderMenuNav>
      </HeaderComponent>
      <DivTitulo>
        <h1>Tela de cadastro</h1>
      </DivTitulo>
    </>
  );
};
export default Header;
