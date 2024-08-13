import validatorToSubtract from "./validatorToSubtract";
// import postOrder from "./postOrder";

const postOrder = () => {};

const subtractToCart = (productToSubtract, isAuthenticated) => {
  const user = JSON.parse(window.localStorage.getItem("userData"));
  const cart = JSON.parse(window.localStorage.getItem("cart"));
  const { enabledStock, updatedProducts } = validatorToSubtract(
    cart,
    productToSubtract
  );

  if (enabledStock.state) {
    const updatedCart = { ...cart, products: updatedProducts };
    const foundProduct = updatedProducts.find(
      (product) => product.id === productToSubtract.id
    );
    isAuthenticated && user
      ? postOrder(user.id, foundProduct)
      : window.localStorage.setItem("cart", JSON.stringify(updatedCart));
  } else if (!enabledStock.state) {
    console.log(enabledStock.message);
  } 

  return updatedProducts;
};

export default subtractToCart;
