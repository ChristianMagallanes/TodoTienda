import React from "react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-titulo-parrafo">
        <h3>Gamer.UY</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          est suscipit, vero temporibus pariatur accusantium sunt autem
          molestias esse nam!
        </p>
      </div>

      <div className="redes-footer.container">
      <h3 className="footer-redes-titulo">siguenos en</h3>
      <div className="redes-footer">
      <FaInstagram  className="footer-link"/>
      <FaFacebookF className="footer-link"/>
      <SiGmail className="footer-link"/>
      </div>
      
      </div>
      <div></div>
    </footer>
  );
}

export default Footer;
