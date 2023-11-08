import React from "react";
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  return (
    <div className="producto">
      <img className="product-img" src={producto.imagen} />
      <div className="producto-data">
        <h4 className="producto-titulo">{producto.titulo}</h4>
        <p className="precio">Precio: ${producto.precio}</p>
        <p className="categoria">Categoría: {producto.categoria}</p>
        <Link className="producto-btn" to={`/item/${producto.id}`}>
          ver mas
        </Link>
      </div>
    </div>
  );
};
export default Item;
