import validatorToSubtract from "./validatorToSubtract";
import postOrder from "./postOrder";

const addToCart = (productToAdd, isAuthenticated) => {
  const user = JSON.parse(window.localStorage.getItem("userData"));
  const cart = JSON.parse(window.localStorage.getItem("cart"));
  const { enabledStock, isProductExist, updatedProducts } = validatorToSubtract(
    cart,
    productToAdd
  );

  if (isProductExist && enabledStock.state) {
    const updatedCart = { ...cart, products: updatedProducts };
    const foundProduct = updatedProducts.find(
      (product) => product.id === productToAdd.id
    );
    isAuthenticated && user
      ? postOrder(user.id, foundProduct)
      : window.localStorage.setItem("cart", JSON.stringify(updatedCart));
  } else if (isProductExist && !enabledStock.state) {
    console.log(enabledStock.message);
  } else {
    cart.products.unshift(productToAdd);
    isAuthenticated && user
      ? postOrder(user.id, productToAdd)
      : window.localStorage.setItem("cart", JSON.stringify(cart));
  }
};

export default addToCart;
