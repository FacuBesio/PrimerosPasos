const express = require("express");
const routerImages = express.Router();
const getImages = require("./routerControllers/Images/getImages");
const postImages = require("./routerControllers/Images/postImages");
const multer = require("multer");

// Configurar multer para manejar la carga de archivos
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

//? GET "/images"
routerImages.get("/", getImages);

//? POST "/images/upload"
routerImages.post("/upload", upload.single('image'), postImages);

module.exports = routerImages;
