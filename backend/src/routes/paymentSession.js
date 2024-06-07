const express = require("express");
const postCreatePreference = require("./routerControllers/PaymentSession/postCreatePreference")
const postWebHook = require("./routerControllers/PaymentSession/postWebHook")
const routerPaymentSession = express.Router();


//? GET "/paymentSession"
// routerPaymentSession.get("/payment/:id", getpaymentById)


//? POST "/paymentSession"
routerPaymentSession.post("/create_preference", postCreatePreference)
routerPaymentSession.post("/webhook", postWebHook)

module.exports = routerPaymentSession