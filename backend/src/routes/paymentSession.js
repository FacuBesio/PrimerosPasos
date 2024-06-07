const express = require("express");
const getPayment = require("./routerControllers/PaymentSession/getPayment")
const getpaymentById = require("./routerControllers/PaymentSession/getpaymentById")
const getWebhooks = require("./routerControllers/PaymentSession/getWebhooks")
const postPaymentSession = require("./routerControllers/PaymentSession/postPaymentSession")
const postCreatePreference = require("./routerControllers/PaymentSession/postCreatePreference")
const routerPaymentSession = express.Router();


//? GET "/paymentSession"
routerPaymentSession.get("/payment", getPayment)
routerPaymentSession.get("/payment/:id", getpaymentById)
routerPaymentSession.post("/webhooks", getWebhooks)

//? POST "/paymentSession"
// routerPaymentSession.post("/", postPaymentSession)
routerPaymentSession.post("/create_preference", postCreatePreference)

module.exports = routerPaymentSession