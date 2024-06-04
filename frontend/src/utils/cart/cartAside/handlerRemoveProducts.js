import putOrder from "../putOrder";

const handlerRemoveProducts = (product, cart, setCart, isAuthenticated, user) => {
  const newProducts = cart.products.filter((e) => e.id !== product.id);
  const updatedCart = { ...cart, products: newProducts };
  const order_id = cart.id;
  if (isAuthenticated && user) {
    putOrder(order_id, product);
  }
  setCart(updatedCart);
};

export default handlerRemoveProducts;
