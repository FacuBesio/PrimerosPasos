const getclient = require("./client");

const postWebHook = async (req, res) => {
  const client = getclient();
  let paymentId;
  if (req.query['data.id']) {
    paymentId = req.query['data.id'];
  }

  try {
    const response = await fetch(
      `https://api.mercadopago.com/v1/payments/${paymentId}`,
      {
        method: "GET",
        headers: {
          'Authorization': `Bearer ${client.accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
   
    if (response.ok) {
      const data = await response.json();
      console.log("DATA: ", data);
      res.sendStatus(201);
    } else {
      res.sendStatus(200);
    }
  } catch (error) {
    console.error("Error al obtener la sesión de pago:", error);
    res.sendStatus(500);
  }
};

module.exports = postWebHook;
