const express = require("express");
const getSubcategories = require("./routerControllers/Subcategories/getSubcategories");
const getSubcategoryById = require("./routerControllers/Subcategories/getSubcategoryById");
const postSubcategories = require("./routerControllers/Subcategories/postSubcategories");
const putSubcategories = require("./routerControllers/Subcategories/putSubcategories");
const deleteSubategory = require("./routerControllers/Subcategories/deleteSubategory");
const routerSubcategories = express.Router();

//? GET "/subcategories"
routerSubcategories.get("/", getSubcategories);
routerSubcategories.get("/:id", getSubcategoryById);

//? POST "/subcategories"
routerSubcategories.post("/", postSubcategories);

//? PUT "/subcategories"
routerSubcategories.put("/", putSubcategories);

//? DELETE "/subcategories"
routerSubcategories.delete("/:id", deleteSubategory)

module.exports = routerSubcategories;