import getCartData from "../../utils/local_storage/getCartData ";
import getUserData from "../../utils/local_storage/getUserData";
import handleOrderAndUpdateCart from "../../utils/local_storage/handleOrderAndUpdateCart";
import updateCartInLocalStorage from "../../utils/local_storage/updateCartInLocalStorage";
import productValidator from "./productValidator";
import showAddNotification from "./showAddNotification";


const addToCart = (productToAdd, isAuthenticated) => {
  const user = getUserData();
  const cart = getCartData();
  const {
    enabledStock,
    isProductAlredyAdded,
    products_with_modifed_quantities,
  } = productValidator(cart, productToAdd);

  if (isProductAlredyAdded) {
    if (enabledStock.state) {
      const updatedCart = { ...cart, products: products_with_modifed_quantities };
      const foundProduct = products_with_modifed_quantities.find(
        (product) => product.id === productToAdd.id
      );

      if (isAuthenticated && user) {
        handleOrderAndUpdateCart(user.id, foundProduct, updatedCart);
      } else {
        updateCartInLocalStorage(updatedCart);
        showAddNotification(`Se agregó tu producto correctamente.`);
      }
    } else {
      console.log(enabledStock.message);
    }
  } else {
    cart?.products?.unshift(productToAdd);

    if (isAuthenticated && user) {
      handleOrderAndUpdateCart(user.id, productToAdd, cart);
    } else {
      updateCartInLocalStorage(cart);
      showAddNotification(`Se agregó tu producto correctamente.`);
    }
  }

  return products_with_modifed_quantities;
};

export default addToCart;