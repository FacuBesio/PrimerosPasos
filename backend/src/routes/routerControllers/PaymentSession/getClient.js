const { MP_ACCESS_TOKEN } = require("../../../config/config");
const { MercadoPagoConfig } = require("mercadopago");

const getClient = () => {
  const client = new MercadoPagoConfig({ accessToken: MP_ACCESS_TOKEN });
  return client;
};

module.exports = getClient;
