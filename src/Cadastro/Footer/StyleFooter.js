import styled from "styled-components";

export const FooterComponent = styled.footer`
  margin-top: 100px;
  background-color: transparent;
  height: 100px;
  border-top: 1px solid #304644;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const FooterLogo = styled.img`
  margin-top: 100px;
  max-width: 300px;
`;

export const FooterSociais = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const SociaisImg = styled.img`
  max-width: 40px;
  margin-bottom: 40px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
