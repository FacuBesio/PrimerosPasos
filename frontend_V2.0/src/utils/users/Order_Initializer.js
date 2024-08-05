import axios from "../../config/axios";

const Order_Initializer = async (user_id, orders) => {
  const openOrderId = orders[orders.length - 1];
  const orderByIdResponse = await axios.get(`/orders/${openOrderId}`);
  const openOrder_products = orderByIdResponse.data.order.products;
  const products = [];
  const cart = JSON.parse(window.localStorage.getItem("cart"));

  //* VERIFICAMOS SI CART O LA ORDEN ABIERTA TIENEN PRODUCTOS
  if (cart.products.length > 0 || openOrder_products.length > 0) {
    //* SI LA ORDEN TIENE PRODUCTOS, Y EL CART ESTA VACIO, SE AGREGAN LOS PRODUCTOS DE LA ORDEN AL CART
    if (openOrder_products.length > 0 && cart.products.length === 0) {
      const updatedCart = { id: openOrderId, products: openOrder_products };
      window.localStorage.setItem("cart", JSON.stringify(updatedCart));

      //* SI CART TIENE PRODUCTOS, SE AGREGAN A LA ORDEN Y SE VUELVE A SETTEAR CART CON LA SUMA DE AMBOS PRODUCTOS
    } else if (cart.products.length > 0) {
      cart.products.forEach((product) => {
        const productToAdd = [product.id, product.cantidad];
        products.push(productToAdd);
      });
      const response = await axios.post(`/orders`, { user_id, products });
      const updatedProducts = response.data.order.products;
      const updatedCart = { id: openOrderId, products: updatedProducts };
      window.localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  } else {
    //* SI CART Y LA ORDEN ESTAN AMBOS SIN PRODUCTOS
    const updatedCart = { id: openOrderId, products };
    window.localStorage.setItem("cart", JSON.stringify(updatedCart));
  }
};

export default Order_Initializer;
