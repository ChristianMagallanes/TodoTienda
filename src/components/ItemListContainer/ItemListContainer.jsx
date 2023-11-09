import { useEffect, useState } from "react";
import { getProductos } from "../Datos/asyncMock";
import "./itemcontainer.css";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../FireBase/ConfigFireBase";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [titulo, setTitulo] = useState("Productos");
  const categoria = useParams().categoria;

 
  useEffect(() => {
    
      // Verificamos si la categoría existe y actualizamos el título en consecuencia
      if (categoria) {
        setTitulo(`${categoria}`);
      } else {
        setTitulo("Productos");
      }
    const productosRef = collection(db, "productos");
    const que = categoria ? query(productosRef, where("categoria", "==", categoria)) : productosRef;

    getDocs(que)
      .then((resp) => {

        setProductos(
          resp.docs.map((doc) => {
            return { ...doc.data(), id: doc.id }
          })
        )
      })
      
  }, [categoria])

  return (
    <div className="item-container">
      <ItemList productos={productos} titulo={titulo} />
    </div>
  );
};

export default ItemListContainer;
