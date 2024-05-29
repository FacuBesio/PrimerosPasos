import productValidator from "./productValidator";

const addToCart = (productToAdd) => {
    const cartStorage = window.localStorage.getItem("cart");
    const cart = JSON.parse(cartStorage);
    const { enabledStock, isProductExist, updatedProducts } = productValidator(
      cart,
      productToAdd
    );

    if (isProductExist && enabledStock.state) {
      const updatedCart = { ...cart, products: updatedProducts };
      window.localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else if (isProductExist && !enabledStock.state) {
      console.log(enabledStock.message);
    } else {
      cart.products.push(productToAdd);
      window.localStorage.setItem("cart", JSON.stringify(cart));
    }
  };

export default addToCart;
