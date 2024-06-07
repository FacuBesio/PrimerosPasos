const { MP_ACCESS_TOKEN } = require("../../../config/config");

const postWebHook = async (req, res) => {
  const payment = req.query;
  console.log("payment: ", payment);
  //? CHECK

  const paymentId = req.query.id;
  try {
    const response = await fetch(
      `https://api.mercadopago.com/v1/payments/${paymentId}`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${MP_ACCESS_TOKEN}` },
      }
    );

    if (response.ok) {
      const data = await response.json();
      console.log("DATA: ", data);
    }
    res.status(200);
  } catch (error) {
    console.error("Error al obtener la sesión de pago:", error);
    res.status(500);
  }
};

module.exports = postWebHook;
