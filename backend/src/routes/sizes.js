const express = require("express");
const getSizes = require("./routerControllers/Sizes/getSizes");
const routerSizes = express.Router();

//? GET "/sizes"
routerSizes.get("/", getSizes);

module.exports = routerSizes;