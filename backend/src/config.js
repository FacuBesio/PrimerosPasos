require("dotenv").config();

const FRONTEND_URL = process.env.VITE_FRONTEND_URL;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const HOST = process.env.HOST;
const PORT = process.env.PORT;
const DB_NAME = process.env.DB_NAME;
const DATA_BASE =  process.env.DATA_BASE ||
`postgres://${DB_USER}:${DB_PASSWORD}@${HOST}:${PORT}/${DB_NAME}`;

module.exports = {
  FRONTEND_URL,
  DB_USER,
  DB_PASSWORD,
  HOST,
  PORT,
  DB_NAME,
  DATA_BASE,
};
