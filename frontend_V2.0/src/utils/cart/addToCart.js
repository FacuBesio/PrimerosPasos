import productValidator from "./productValidator";
// import postOrder from "./postOrder";

const postOrder = () => {};

const addToCart = (productToAdd, isAuthenticated) => {
  const user = JSON.parse(window.localStorage.getItem("userData"));
  const cart = JSON.parse(window.localStorage.getItem("cart"));
  const { enabledStock, isProductAlredyAdded, verified_cart_products } =
    productValidator(cart, productToAdd);

  if (isProductAlredyAdded && enabledStock.state) {
    const updatedCart = { ...cart, products: verified_cart_products };
    const foundProduct = verified_cart_products.find(
      (product) => product.id === productToAdd.id
    );
    isAuthenticated && user
      ? postOrder(user.id, foundProduct)
      : window.localStorage.setItem("cart", JSON.stringify(updatedCart));
  } else if (isProductAlredyAdded && !enabledStock.state) {
    console.log(enabledStock.message);
  } else {
    cart.products.unshift(productToAdd);
    isAuthenticated && user
      ? postOrder(user.id, productToAdd)
      : window.localStorage.setItem("cart", JSON.stringify(cart));
  }
};

export default addToCart;
