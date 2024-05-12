const express = require("express");
const routerOrders = express.Router();
const getOrderById = require("./routerControllers/Orders/getOrderById");
const getOrders = require("./routerControllers/Orders/getOrders");
const postOrder = require("./routerControllers/Orders/postOrder");
const putOrder = require("./routerControllers/Orders/putOrder");
const deleteOrder = require("./routerControllers/Orders/deleteOrder");

//? GET "/orders"
routerOrders.get("/", getOrders);
routerOrders.get("/:id", getOrderById);

//? POST "/orders"
routerOrders.post("/", postOrder);

//? PUT "/orders"
routerOrders.put("/", putOrder);

//? DELETE "/orders"
routerOrders.delete("/:id", deleteOrder);

module.exports = routerOrders;
