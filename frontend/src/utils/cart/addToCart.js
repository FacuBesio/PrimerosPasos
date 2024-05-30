import productValidator from "./productValidator";
import postOrder from "./postOrder";

const addToCart = (productToAdd) => {
  const cartStorage = window.localStorage.getItem("cart");
  const cart = JSON.parse(cartStorage);
  const { enabledStock, isProductExist, updatedProducts } = productValidator(
    cart,
    productToAdd
  );

  if (isProductExist && enabledStock.state) {
    const updatedCart = { ...cart, products: updatedProducts };
    const foundProduct = updatedProducts.find(
      (product) => product.id === productToAdd.id
    );
    postOrder(2, foundProduct);
    window.localStorage.setItem("cart", JSON.stringify(updatedCart));
  } else if (isProductExist && !enabledStock.state) {
    console.log(enabledStock.message);
  } else {
    cart.products.push(productToAdd);
    postOrder(2, productToAdd);
    window.localStorage.setItem("cart", JSON.stringify(cart));
  }
};

export default addToCart;
