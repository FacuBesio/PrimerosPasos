const { BACKEND_URL, MP_ACCESS_TOKEN } = require("../../../config/config");
const { MercadoPagoConfig, Preference } = require("mercadopago");
const getclient = require("./client");

const postCreatePreference = async (req, res) => {
  const client = getclient();
  try {
    const products = req.body.products;
    const items = products.map((product) => {
      const mp_object = {
        title: product.name,
        quantity: Number(product.cantidad),
        unit_price: Number(product.price),
        currency_id: "ARS",
      };
      return mp_object;
    });

    const body = {
      items: items,
      back_urls: {
        success: `https://www.youtube.com/@onthecode`,
        failure: `https://www.youtube.com/@onthecode`,
        pending: `https://www.youtube.com/@onthecode`,
      },
      auto_return: "approved",
      notification_url: `https://9546-152-168-175-23.ngrok-free.app/payment-session/webhook`,
    };

    const preference = new Preference(client);
    const result = await preference.create({ body });
    res.status(200).json({ id: result.id });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: `Error al crear la preferencia: ${error.message}` });
  }
};

module.exports = postCreatePreference;
