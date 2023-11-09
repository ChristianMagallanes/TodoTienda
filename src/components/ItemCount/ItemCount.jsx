import React from "react";
import "../ItemCount/ItemCount.css";

const ItemCount = ({ cantidad, handleRestar, handleSumar, handleAgregar }) => {
  return (
    <div>
      <div className="item-count">
        <button className="count-btn" onClick={handleRestar}>
          -
        </button>
        <p className="count-cantidad">{cantidad}</p>
        <button className="count-btn-2" onClick={handleSumar}>
          +
        </button>
      </div>
      <button className="agregar-al-carrito" onClick={handleAgregar}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
