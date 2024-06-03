import axios from "../../config/axios";

const putOrder = async (order_id, productToRemove, productToAdd) => {
  const id = order_id;
  let productsToAdd;
  let productsToRemove;

  productToAdd && (productsToAdd = [[productToAdd.id, productToAdd.cantidad]]);
  productToRemove && (productsToRemove = [[productToRemove.id]]);

  try {
    const response = await axios.put(`/orders`, {
      id: id,
      productsToAdd: productsToAdd,
      productsToRemove: productsToRemove,
    });
    console.log(response.data);
  } catch (error) {
    console.error("Error al actualizar Productos:", error);
  }
};

export default putOrder;
