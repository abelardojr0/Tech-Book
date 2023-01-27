import styled from "styled-components";
import responsivo, { breakpoints } from "../../Responsivo/MediaQuery";
export const ContainerFormulario = styled.form`
  max-width: 960px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin: 0 auto;
  ${responsivo(breakpoints.desktop)} {
    padding: 0 50px;
  }
  ${responsivo(breakpoints.tablet)} {
    padding: 0 20px;
  }
`;
export const TituloFormulario = styled.h2`
  margin-top: 80px;
  margin-bottom: 20px;
  color: #f26522;
  font-size: 1.5rem;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
`;

export const SubtituloFormulario = styled.h3`
  font-weight: bold;
  color: #304644;
  font-size: 1.3rem;
  font-family: "Poppins", sans-serif;
  margin-bottom: 20px;
  margin-top: 40px;
`;

export const CampoDuplo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const CampoDuploDivisao = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

export const Selecao = styled.select`
  border-radius: 20px;
  border: 2px solid #304644;
  padding: 1rem;
  font-size: 0.8rem;
  background-color: transparent;
`;

export const Botao = styled.button`
  color: #fff;
  background-color: #f26522;
  padding: 1rem 2rem;
  text-align: center;
  font-size: 1.5rem;
  border: none;
  margin-top: 40px;
  align-self: flex-end;
  border-radius: 20px;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
`;
