import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cadastro from "./Cadastro/Cadastro";
import { GlobalStyles } from "./GlobalStyles";
import "./App.css";
import Finalizado from "./Finalizado/Finalizado";
function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Cadastro />} />
          <Route path="/finalizado" element={<Finalizado />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
