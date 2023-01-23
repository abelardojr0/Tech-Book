import styled from "styled-components";

export const HeaderComponent = styled.header`
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100px;
`;

export const HeaderLogo = styled.img`
  margin-left: 60px;
  max-width: 200px;
`;

export const HeaderMenuNav = styled.ul`
  display: flex;
  align-items: center;
  gap: 30px;
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
