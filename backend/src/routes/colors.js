const express = require("express");
const getColors = require("./routerControllers/Colors/getColors");
const routerColors = express.Router();

//? GET "/colors"
routerColors.get("/", getColors);

module.exports = routerColors;