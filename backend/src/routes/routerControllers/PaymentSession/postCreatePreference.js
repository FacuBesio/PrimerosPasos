const { BACKEND_URL, MP_ACCESS_TOKEN } = require("../../../config/config");
const { MercadoPagoConfig, Preference } = require("mercadopago");

const create_preference = async (req, res) => {
  try {
    const client = new MercadoPagoConfig({ accessToken: MP_ACCESS_TOKEN });
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
      notification_url: `${BACKEND_URL}/paymentSession/webhook`,
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

module.exports = create_preference;
