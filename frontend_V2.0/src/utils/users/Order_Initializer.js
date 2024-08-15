import axios from "../../config/axios";
import getCartData from "../local_storage/getCartData ";
import updateCartInLocalStorage from "../local_storage/updateCartInLocalStorage";

const order_Initializer = async (userId, orders) => {
  const cart = getCartData();
  const openOrderId = orders[orders.length - 1];
  const orderById = await axios.get(`/orders/${openOrderId}`);
  const openOrder_products = orderById.data.order.products;
  const products = [];

  //* VERIFICAMOS SI CART O LA ORDEN ABIERTA TIENEN PRODUCTOS
  if (cart.products.length > 0 || openOrder_products.length > 0) {
    //* SI LA ORDEN TIENE PRODUCTOS, Y EL CART ESTA VACIO, SE AGREGAN LOS PRODUCTOS DE LA ORDEN AL CART
    if (openOrder_products.length > 0 && cart.products.length === 0) {
      const updatedCart = { id: openOrderId, products: openOrder_products };
      updateCartInLocalStorage(updatedCart);

      //* SI CART TIENE PRODUCTOS, SE AGREGAN A LA ORDEN Y SE VUELVE A SETTEAR CART CON LA SUMA DE AMBOS PRODUCTOS
    } else if (cart.products.length > 0) {
      cart.products.forEach((product) => {
        const productToAdd = [product.id, product.cantidad];
        products.push(productToAdd);
      });
      const response = await axios.post(`/orders`, { userId, products });
      const updatedProducts = response.data.order.products;
      const updatedCart = { id: openOrderId, products: updatedProducts };
      updateCartInLocalStorage(updatedCart);
    }
  } else {
    //* SI CART Y LA ORDEN ESTAN AMBOS SIN PRODUCTOS
    const updatedCart = { id: openOrderId, products };
    updateCartInLocalStorage(updatedCart);
  }
};

export default order_Initializer;
