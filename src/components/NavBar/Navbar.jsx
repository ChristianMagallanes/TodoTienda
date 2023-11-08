import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../NavBar/Navbar.css"; // Asegúrate de que tus estilos estén configurados para el diseño responsive.
import miImagen from "../../assets/logo1.png";
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="nav-container">
      <nav className="navbar">
        {/* Logotipo */}
        <Link to="/" className="navbar-logo">
          <img className="navbar-logo" src={miImagen} alt="Mi Imagen" />
        </Link>

        {/* Botón hamburguesa */}
        <div className="menu-button" onClick={toggleMenu}>
          <div className={`bar ${isMenuOpen ? "change" : ""}`}></div>
          <div className={`bar ${isMenuOpen ? "change" : ""}`}></div>
          <div className={`bar ${isMenuOpen ? "change" : ""}`}></div>
        </div>

        {/* Categorías de productos (mostradas u ocultas según el estado de isMenuOpen) */}
        <ul className={`navbar-categorias ${isMenuOpen ? "open" : ""}`}>
          <li>
            <Link className="categoria-item" to="/productos">
              TODOS LOS PRODUCTOS
            </Link>
          </li>
          <li>
            <Link className="categoria-item" to="/productos/pc">
              PC
            </Link>
          </li>
          <li>
            <Link className="categoria-item" to="/productos/audifonos">
              AUDIFONOS
            </Link>
          </li>
          <li>
            <Link className="categoria-item" to="/productos/componentes">
              COMPONENTES
            </Link>
          </li>
        </ul>

        {/* Widget de carrito de compras */}
        <div className="cart">
          <CartWidget />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
