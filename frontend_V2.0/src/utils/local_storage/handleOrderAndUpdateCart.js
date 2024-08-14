import showAddNotification from "../cart/showAddNotification";
import updateCartInLocalStorage from "./updateCartInLocalStorage";
import postOrder from "../../services/Cart/postOrder";

const handleOrderAndUpdateCart = (userId, product, cart) => {
  const response = postOrder(userId, product);
  const order = response?.order;
  if (order) {
    const updatedCart = { id: order.id, products: order.products };
    updateCartInLocalStorage(updatedCart);
    showAddNotification(`Se agregó tu producto correctamente.`);
    return updatedCart;
  }

  return cart;
};

export default handleOrderAndUpdateCart;
