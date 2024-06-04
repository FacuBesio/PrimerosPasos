import axios from "../../config/axios";

const postOrder = async (user_id, productToAdd) => {
  
  const userId = user_id;
  const products = [[productToAdd.id, productToAdd.cantidad]];
  
  try {
    const response = await axios.post(`/orders`, { userId, products });
    const order = response.data.order;
    console.log("order: ", response.data);
    if (order) {
      const cart = { id: order.id, products: order.products };
      window.localStorage.setItem("cart", JSON.stringify(cart));
    }
  } catch (error) {
    console.error("Error al agregar Productos:", error);
  }
};

export default postOrder;
