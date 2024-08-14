const updateCartInLocalStorage = (cart) => {
  cart && window.localStorage.setItem("cart", JSON.stringify(cart));
};

export default updateCartInLocalStorage;
