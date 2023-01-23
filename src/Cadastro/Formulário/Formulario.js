import React from "react";
import Input from "./Components/Input";
import { LabelInput } from "./Components/StylesInput";
import {
  Botao,
  CampoDuplo,
  CampoDuploDivisao,
  ContainerFormulario,
  Selecao,
  SubtituloFormulario,
  TituloFormulario,
} from "./StylesFormulario";

const Formulario = () => {
  function finalizar() {
    window.history.pushState({}, null, "/finalizado");
  }
  return (
    <>
      <ContainerFormulario onSubmit={finalizar}>
        <TituloFormulario>Dados do cadastro</TituloFormulario>
        <SubtituloFormulario>Dados Pessoais</SubtituloFormulario>
        <Input
          htmlFor={"nome"}
          texto={"Nome Completo"}
          tipo={"text"}
          nome={"nome"}
          id={"nome"}
          tamanho={"grande"}
          required={true}
        />
        <CampoDuplo>
          <CampoDuploDivisao>
            <Input
              htmlFor={"nascimento"}
              texto={"Nascimento"}
              tipo={"date"}
              nome={"nascimento"}
              id={"nascimento"}
              tamanho={"pequeno"}
              required
            />
          </CampoDuploDivisao>
          <CampoDuploDivisao>
            <Input
              htmlFor={"contato"}
              texto={"Contato"}
              tipo={"number"}
              nome={"contato"}
              id={"contato"}
              tamanho={"pequeno"}
              required
              placeholder={"(XX) XXXXX-XXXX"}
            />
          </CampoDuploDivisao>
        </CampoDuplo>
        <Input
          htmlFor={"email"}
          texto={"Email"}
          tipo={"email"}
          nome={"email"}
          id={"email"}
          tamanho={"grande"}
          required
        />
        <SubtituloFormulario>Endereço</SubtituloFormulario>
        <Input
          htmlFor={"cep"}
          texto={"CEP"}
          tipo={"number"}
          nome={"cep"}
          id={"cep"}
          tamanho={"grande"}
          cep={true}
          required
        />
        <Input
          htmlFor={"endereco"}
          texto={"Endereço"}
          tipo={"text"}
          nome={"endereco"}
          id={"endereco"}
          tamanho={"grande"}
          required
        />
        <CampoDuplo>
          <CampoDuploDivisao>
            <Input
              htmlFor={"numero"}
              texto={"Número"}
              tipo={"number"}
              nome={"numero"}
              id={"numero"}
              tamanho={"pequeno"}
              required
            />
          </CampoDuploDivisao>
          <CampoDuploDivisao>
            <Input
              htmlFor={"complemento"}
              texto={"Complemento"}
              tipo={"text"}
              nome={"complemento"}
              id={"complemento"}
              tamanho={"pequeno"}
            />
          </CampoDuploDivisao>
        </CampoDuplo>
        <Input
          htmlFor={"bairro"}
          texto={"Bairro"}
          tipo={"text"}
          nome={"bairro"}
          id={"bairro"}
          tamanho={"grande"}
          required
        />
        <CampoDuplo>
          <CampoDuploDivisao>
            <Input
              htmlFor={"cidade"}
              texto={"Cidade"}
              tipo={"text"}
              nome={"cidade"}
              id={"cidade"}
              tamanho={"pequeno"}
              required
            />
          </CampoDuploDivisao>
          <CampoDuploDivisao>
            <LabelInput for="estado">UF</LabelInput>
            <Selecao id="estado" name="estado">
              <option value="AC">Acre</option>
              <option value="AL">Alagoas</option>
              <option value="AP">Amapá</option>
              <option value="AM">Amazonas</option>
              <option value="BA">Bahia</option>
              <option value="CE">Ceará</option>
              <option value="DF">Distrito Federal</option>
              <option value="ES">Espírito Santo</option>
              <option value="GO">Goiás</option>
              <option value="MA">Maranhão</option>
              <option value="MT">Mato Grosso</option>
              <option value="MS">Mato Grosso do Sul</option>
              <option value="MG">Minas Gerais</option>
              <option value="PA">Pará</option>
              <option value="PB">Paraíba</option>
              <option value="PR">Paraná</option>
              <option value="PE">Pernambuco</option>
              <option value="PI">Piauí</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="RN">Rio Grande do Norte</option>
              <option value="RS">Rio Grande do Sul</option>
              <option value="RO">Rondônia</option>
              <option value="RR">Roraima</option>
              <option value="SC">Santa Catarina</option>
              <option value="SP">São Paulo</option>
              <option value="SE">Sergipe</option>
              <option value="TO">Tocantins</option>
              <option value="EX">Estrangeiro</option>
            </Selecao>
          </CampoDuploDivisao>
        </CampoDuplo>
        <Botao type="submit">Enviar Formulário</Botao>
      </ContainerFormulario>
    </>
  );
};

export default Formulario;
