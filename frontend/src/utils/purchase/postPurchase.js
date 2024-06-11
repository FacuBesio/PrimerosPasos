import axios from "../../config/axios";

const postPurchase = async (querys, user, cart) => {
  const { merchant_order_id, paymentId, payment_type, preference_id, status } =
    querys;

  const orders = [cart.id];
  const userId = user.id;
  const payment_id = paymentId;
  const payment_status = status;

  try {
    const response = await axios.post(`/purchases`, {
      orders,
      userId,
      payment_id,
      payment_type,
      payment_status,
      merchant_order_id,
      preference_id,
    });

    console.log("response: ", response.data);
    // const { id } = response.data;
    // return id;
  } catch (error) {
    console.error("Error al obtener producto:", error);
  }
};

export default postPurchase;
