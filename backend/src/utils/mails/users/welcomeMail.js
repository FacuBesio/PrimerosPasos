const { OWNER_EMAIL } = require("../../../config/ownerCredentials");
const fs = require("fs");
const path = require("path");

const welcomeMail = (email) => {
  const htmlContent = fs.readFileSync(path.join(__dirname, "welcome.html"), "utf8");

  return {
    from: OWNER_EMAIL,
    to: email,
    subject: "Bienvenidos/as a Primeros Pasos - Tienda para bebés",
    html: htmlContent,
  };
};

module.exports = welcomeMail;
