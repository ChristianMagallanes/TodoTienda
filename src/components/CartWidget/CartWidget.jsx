import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";
import "../NavBar/Navbar.css";

const CartWidget = () => {
  const { cantidadEnCarrito } = useContext(CartContext);

  return (
    <div>
      <Link className="menu-link" to="/carrito">
        <FaShoppingCart className="cart" />
        <span className="cart-cantidad">{cantidadEnCarrito()}</span>
      </Link>
    </div>
  );
};

export default CartWidget;
