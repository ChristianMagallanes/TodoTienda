import data from "./data.json";
export const getProductos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 500);
  });
};

export const getItemById = (id) => {
  return new Promise((resolve, reject) => {
    const item = data.find((el) => el.id === id);
    if (item) {
      resolve(item);
    } else {
      reject({
        error: "no se encontro el producto",
      });
    }
  });
};
