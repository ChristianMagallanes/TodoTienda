import Item from "./Item";

const ItemList = ({ productos, titulo }) => {
  return (
    <div className="productos-container">
      <h2 className="tituloxd">{titulo}</h2>
      <div className="items">
        {productos.map((prod) => (
          <Item producto={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
