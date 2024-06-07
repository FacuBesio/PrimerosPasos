require("dotenv").config(); 
const MP_ACCESS_TOKEN =  process.env.MP_ACCESS_TOKEN
const { FRONTEND_URL } = require("../../../config/config");
const { MercadoPagoConfig, Preference } = require("mercadopago");


const create_preference = async (req, res) => {
  try {
    const client = new MercadoPagoConfig({ accessToken: MP_ACCESS_TOKEN });
    const body = {
      items: [
        {
          title: req.body.title,
          quantity: Number(req.body.quantity),
          unit_price: Number(req.body.price),
          currency_id: "ARS",
        },
      ],
      back_urls: {
        // success: `${FRONTEND_URL}`,
        // failure: `${FRONTEND_URL}`,
        // pending: `${FRONTEND_URL}`,
        success: `https://www.youtube.com/@onthecode`,
        failure: `https://www.youtube.com/@onthecode`,
        pending: `https://www.youtube.com/@onthecode`,
      },
      auto_return: "approved",
    };

    const preference = new Preference(client);
    const result = await preference.create({ body });
    res.status(200).json({ id: result.id });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: `Error al crear la preferencia: ${error.message}` });
  }
};

module.exports = create_preference;
