const { MP_ACCESS_TOKEN } = require("../../../config/config");
const { MercadoPagoConfig } = require("mercadopago");

const getclient = () => {
  const client = new MercadoPagoConfig({ accessToken: MP_ACCESS_TOKEN });
  return client;
};

module.exports = getclient;
