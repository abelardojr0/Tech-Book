import React from "react";
import {
  FooterComponent,
  FooterLogo,
  FooterSociais,
  SociaisImg,
} from "./StyleFooter";
import logo from "../../Img/logo.png";
import instagram from "../../Img/instagram.png";
import whatsapp from "../../Img/whatsapp.png";
import facebook from "../../Img/facebook.png";

const Footer = () => {
  return (
    <>
      <FooterComponent>
        <FooterLogo src={logo} alt="logo" />
        <FooterSociais>
          <SociaisImg src={instagram} alt="instagram" />
          <SociaisImg src={whatsapp} alt="whatsapp" />
          <SociaisImg src={facebook} alt="facebook" />
        </FooterSociais>
      </FooterComponent>
    </>
  );
};
export default Footer;
