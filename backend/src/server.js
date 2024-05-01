const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");
const { FRONTEND_URL } = require("./config/config.js");

//? SERVER
const server = express();

const corsOptions = {
  origin: FRONTEND_URL,
  methods: ["GET", "POST", "PUT", "DELETE"],
  optionsSuccessStatus: 200,
};

//*MIDDLEWARES
server.use(morgan("dev"));
server.use(express.json());
server.use(cors(corsOptions));

// RUTAS
server.use(router);

module.exports = server;
