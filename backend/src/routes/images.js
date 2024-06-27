const express = require("express");
const routerImages = express.Router();
const getImages = require("./routerControllers/Images/getImages");
const postImages = require("./routerControllers/Images/postImages");
const multer = require('multer');

// Configurar almacenamiento en memoria para Multer
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const uploadSingleImage = upload.single('img');

//? GET "/images"
routerImages.get("/", getImages);

//? POST "/images/upload"
routerImages.post("/upload", uploadSingleImage, postImages);

module.exports = routerImages;
