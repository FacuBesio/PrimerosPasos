import axios from "../../config/axios";
// import showAddNotification from "./showAddNotification";

const postOrder = async (user_id, productToAdd) => {
  
  const userId = user_id;
  const products = [[productToAdd.id, productToAdd.cantidad]];
  
  try {
    const response = await axios.post(`/orders`, { userId, products });
    return response.data
  } catch (error) {
    console.error("Error al agregar Productos:", error);
  }
};

export default postOrder;
