const {MercadoPagoConfig, Preference } = require("mercadopago");
// Agrega credenciales
const client = new MercadoPagoConfig({ accessToken: 'YOUR_ACCESS_TOKEN' });

// Configurar Mercadopago aquí si es necesario
// mercadopago.configure({ access_token: "" });

module.exports = client;
