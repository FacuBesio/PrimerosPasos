import axios from "../../config/axios";
import showAddNotification from "./showAddNotification";

const postOrder = async (user_id, productToAdd) => {
  
  const userId = user_id;
  const products = [[productToAdd.id, productToAdd.cantidad]];
  
  try {
    const response = await axios.post(`/orders`, { userId, products });
    const order = response.data.order;
    if (order) {
      const cart = { id: order.id, products: order.products };
      window.localStorage.setItem("cart", JSON.stringify(cart));
      showAddNotification(`Se agregó tu producto correctamente.`)
    }
  } catch (error) {
    console.error("Error al agregar Productos:", error);
  }
};

export default postOrder;
