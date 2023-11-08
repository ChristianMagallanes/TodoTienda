import React, { useContext } from "react";
import "../Carrito/CarritoContainer.css";
import { CartContext } from "../CartContext/CartContext";
import { FiArrowLeft, FiCheck, FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";

const Carrito = () => {
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

  const handleVaciar = () => {
    vaciarCarrito();
  };

  return (
    <div className="carrito-container">
      <div className="carrito-prodcuctos">
        <h1 className="main-title">vas a comprar</h1>
        {carrito.map((prod) => (
          <div className="prod-carrito" key={prod.id}>
            <br />
            <img className="product-img img-cart" src={prod.imagen} />
           <div>
           <h3>{prod.titulo}</h3>
            <p className="carrito-precio">Precio del producto: ${prod.precio}</p>
            <p>Cantidad: {prod.cantidad}</p>
            <p>Precio total: ${prod.precio * prod.cantidad}</p>
           </div>
            <br />
          </div>
        ))}
        <div className="carrito-total">
        {carrito.length > 0 ? (
          <>
            <h2>Precio total: ${precioTotal()}</h2>
            <button className="carrito-btn" onClick={handleVaciar}>
            <FiTrash2 /> Vaciar
            </button>
            <div className="btns-container">
            <Link className="comprar-btn-home" to="/">
            <FiArrowLeft /> productos
            </Link>
            <Link className="comprar-btn" to="/checkout">
            <FiCheck /> comprar
            </Link>
            </div>
          </>
        ) : (
          <h2>No tienes productos en tu carrito</h2>
        )}
      </div>
      </div>
      
    </div>
  );
};

export default Carrito;
