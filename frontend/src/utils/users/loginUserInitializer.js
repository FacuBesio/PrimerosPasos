import axios from "../../../src/config/axios";

const loginUserInitializer = async (id, orders) => {
  const openOrderId = orders[orders.length - 1];
  const getOrderByIdResponse = await axios.get(`/orders/${openOrderId}`);
  const openOrderProducts = getOrderByIdResponse.data.order.products;

  const userId = id;
  const products = [];
  const cart = JSON.parse(window.localStorage.getItem("cart"));

  //* VERIFICAMOS SI CART O LA ORDEN ABIERTA TIENEN PRODUCTOS
  if (cart.products.length > 0 || openOrderProducts.length > 0) {

    //* SI LA ORDEN TIENE PRODUCTOS, Y EL CART ESTA VACIO, SE AGREGAN LOS PRODUCTOS DE LA ORDEN AL CART.
    if (openOrderProducts.length > 0 && cart.products.length === 0) {
      const updatedCart = { id: openOrderId, products: openOrderProducts };
      window.localStorage.setItem("cart", JSON.stringify(updatedCart));

      //* SI CART TIENE PRODUCTOS, SE AGREGAN A LA ORDEN Y SE VUELVE A SETTEAR CART CON LA SUMA DE AMBOS PRODUCTOS
    } else if (cart.products.length > 0) {
      cart.products.forEach((product) => {
        const productToAdd = [product.id, product.cantidad];
        products.push(productToAdd);
      });

      const response = await axios.post(`/orders`, { userId, products });
      const openOrderId = response.data.order.id;
      const updatedProducts = response.data.order.products;
      const updatedCart = { id: openOrderId, products: updatedProducts };
      window.localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  }
};

export default loginUserInitializer;
