import React from "react";
import "./MenuHamburguer.css";
const MenuHamburguer = ({ menuMobile, setMenuMobile }) => {
  function mostrarMenu() {
    if (menuMobile === "ativo") {
      setMenuMobile("");
    } else {
      setMenuMobile("ativo");
    }
  }
  return (
    <div class="checkbox-wrapper">
      <input type="checkbox" id="toggle" />
      <label onClick={mostrarMenu} class="checkbox" for="toggle">
        <div class="trace"> </div>
        <div class="trace"> </div>
        <div class="trace"> </div>
      </label>
    </div>
  );
};
export default MenuHamburguer;
