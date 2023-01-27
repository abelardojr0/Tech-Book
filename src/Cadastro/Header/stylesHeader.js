import styled from "styled-components";
import responsivo, { breakpoints } from "../../Responsivo/MediaQuery";

export const HeaderComponent = styled.header`
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100vw;
  height: 100px;
  ${responsivo(breakpoints.tablet)} {
  }
`;

export const HeaderLogo = styled.img`
  max-width: 200px;
  ${responsivo(breakpoints.tablet)} {
    position: static;
    display: none;
  }
`;
export const HeaderLogoMobile = styled.img`
  max-width: 60px;
  display: none;
  position: absolute;
  top: 20px;
  left: 100px;
  ${responsivo(breakpoints.tablet)} {
    display: block;
  }
`;

export const HeaderMenuNav = styled.ul`
  display: flex;
  align-items: center;
  gap: 30px;
  ${responsivo(breakpoints.tablet)} {
    display: none;
    &.ativo {
      background-color: white;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 100px;
      left: 0;
    }
  }
`;

export const HeaderMenuNavPerfil = styled.ul`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-right: 60px;
  ${responsivo(breakpoints.mobile)} {
    gap: 5px;
    margin-right: 5px;
  }
`;

export const HeaderLiItem = styled.li`
  background: #304644;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  &:hover {
    opacity: 0.8;
  }
`;

export const LinkComIcone = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-weight: bold;
`;

export const TextoLinks = styled.p`
  font-size: 1.2rem;
  background: #304644;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  &:hover {
    opacity: 0.8;
  }
  ${responsivo(breakpoints.desktop)} {
    display: none;
  }
`;
export const HeaderIcone = styled.img`
  padding: 1rem;
`;

export const DivTitulo = styled.div`
  background-color: #304644;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 2.5rem;
    text-align: center;
    font-family: "Poppins", sans-serif;
    font-weight: bold;
    color: #fff;
  }
`;
