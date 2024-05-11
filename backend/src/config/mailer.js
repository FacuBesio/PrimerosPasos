const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "primeros.pasos.to@gmail.com",
    pass: "arkgbstafsrcafjy",
  },
  tls: {
    rejectUnauthorized: false,
  },
});

module.exports = transporter;
