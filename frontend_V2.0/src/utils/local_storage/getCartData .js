const getCartData = () => {
  const cartData = window.localStorage.getItem("cart");
  return cartData ? JSON.parse(cartData) : { id: null, products: [] };
};

export default getCartData;
