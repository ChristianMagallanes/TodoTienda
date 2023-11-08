import { useEffect, useState } from "react";
import ItemDetalles from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../FireBase/ConfigFireBase";

const ItemDetallesContainer = ({ itemId }) => {
  const [item, setItem] = useState(null);
  const id = useParams().id;

  useEffect(() => {
    const docRef = doc(db, "productos", id);
    getDoc(docRef)
      .then((resp) => {
        setItem(
          { ...resp.data(), id: resp.id }
        );
      })
  }, [id]);

  return (
    <div className="item-detallesc">{item && <ItemDetalles item={item} />}</div>
  );
};

export default ItemDetallesContainer;
