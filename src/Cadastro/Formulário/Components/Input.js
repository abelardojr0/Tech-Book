import React from "react";
import { LabelInput, InputComponent } from "./StylesInput";

const Input = ({
  htmlFor,
  texto,
  tipo,
  nome,
  id,
  tamanho,
  placeholder,
  cep,
  required,
}) => {
  const [error, setError] = React.useState(false);
  async function buscarCep({ target }) {
    try {
      const consultaCep = await fetch(
        `https://viacep.com.br/ws/${target.value}/json/`
      );
      const cepJson = await consultaCep.json();
      setError(false);
      if (cepJson.erro) {
        throw Error("Cep não existe");
      }
      const endereco = document.querySelector("#endereco");
      const cidade = document.querySelector("#cidade");
      const bairro = document.querySelector("#bairro");
      const estado = document.querySelector("#estado");

      endereco.value = cepJson.logradouro;
      endereco.disabled = true;

      cidade.value = cepJson.localidade;
      cidade.disabled = true;

      bairro.value = cepJson.bairro;
      bairro.disabled = true;

      estado.value = cepJson.uf;
      estado.disabled = true;
    } catch (erro) {
      setError(true);
    }
  }
  return (
    <>
      {!cep && required && (
        <>
          <LabelInput htmlFor={htmlFor}>{texto}</LabelInput>
          <InputComponent
            className={tamanho}
            type={tipo}
            name={nome}
            id={id}
            placeholder={placeholder}
            required
          />
        </>
      )}
      {!cep && !required && (
        <>
          <LabelInput htmlFor={htmlFor}>{texto}</LabelInput>
          <InputComponent
            className={tamanho}
            type={tipo}
            name={nome}
            id={id}
            placeholder={placeholder}
          />
        </>
      )}
      {cep && required && (
        <>
          <LabelInput htmlFor={htmlFor}>{texto}</LabelInput>
          <InputComponent
            className={tamanho}
            type={tipo}
            name={nome}
            id={id}
            placeholder={placeholder}
            onBlur={buscarCep}
          />
          {error && (
            <p style={{ marginTop: "5px", marginLeft: "10px", color: "red" }}>
              Cep inválido, tente novamente
            </p>
          )}
        </>
      )}
    </>
  );
};

export default Input;
