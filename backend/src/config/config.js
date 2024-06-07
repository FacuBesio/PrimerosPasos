require("dotenv").config();

const BACKEND_URL = process.env.BACKEND_URL;
const FRONTEND_URL = process.env.FRONTEND_URL;
const MP_ACCESS_TOKEN = process.env.MP_ACCESS_TOKEN;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const HOST = process.env.HOST;
const PORT = process.env.PORT;
const DB_NAME = process.env.DB_NAME;
const DATA_BASE =  process.env.DATA_BASE ||
`postgres://${DB_USER}:${DB_PASSWORD}@${HOST}:${PORT}/${DB_NAME}`;

module.exports = {
  BACKEND_URL,
  FRONTEND_URL,
  MP_ACCESS_TOKEN,
  DB_USER,
  DB_PASSWORD,
  HOST,
  PORT,
  DB_NAME,
  DATA_BASE,
};
