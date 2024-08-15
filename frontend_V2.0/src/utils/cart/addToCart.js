import getCartData from "../../utils/local_storage/getCartData ";
import getUserData from "../../utils/local_storage/getUserData";
import handleOrder from "../../utils/local_storage/handleOrder";
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
    if (!enabledStock.state) return console.log(enabledStock.message);
    const updatedCart = {
      ...cart,
      products: products_with_modifed_quantities,
    };
    const foundProduct = products_with_modifed_quantities.find(
      (product) => product.id === productToAdd.id
    );

    if (isAuthenticated && user) {
      handleOrder(user.id, foundProduct);
    }
    updateCartInLocalStorage(updatedCart);
    showAddNotification(`Se agregó tu producto correctamente.`);
  } else {
    if (isAuthenticated && user) {
      handleOrder(user.id, productToAdd);
    }
    cart?.products?.unshift(productToAdd);
    updateCartInLocalStorage(cart);
    showAddNotification(`Se agregó tu producto correctamente.`);
  }

  return products_with_modifed_quantities;
};

export default addToCart;
