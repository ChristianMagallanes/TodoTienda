import { useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./itemdetalles.css";
import { CartContext } from "/src/components/CartContext/CartContext.jsx";
import React, { useState } from "react";

const ItemDetail = ({ item }) => {
  const { carrito, agregarAlCarrito } = useContext(CartContext);
  console.log(carrito);

  const [cantidad, setCantidad] = useState(1);

  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
  };

  const handleSumar = () => {
    cantidad < item.stock && setCantidad(cantidad + 1);
  };

  return (
    <div className="item-detalles">
      <img className="detalles-img" src={item.imagen} alt={item.titulo} />
      <div className="detalles-container">
        <h4 className="producto-titulo detalles-titulo">{item.titulo}</h4>
        <p className="detalles-descripcion">{item.descripcion}</p>
        <p className="precio detalles-precio">Precio: ${item.precio}</p>
        <p className="categoria detalles-categoria">
          Categoría: {item.categoria}
        </p>
        <ItemCount
          cantidad={cantidad}
          handleSumar={handleSumar}
          handleRestar={handleRestar}
          handleAgregar={() => {
            agregarAlCarrito(item, cantidad);
          }}
        />
      </div>
    </div>
  );
};

export default ItemDetail;
