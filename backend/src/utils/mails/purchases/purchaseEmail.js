const { OWNER_EMAIL } = require("../../../config/ownerCredentials");
const purchaseEmailBuilder = require("../../../utils/mails/purchases/purchaseEmailBuilder");


const purchaseEmail = (userEmail, purchase) => {
  const purchaseEmail = purchaseEmailBuilder(purchase)

  return {
    from: OWNER_EMAIL,
    to: userEmail,
    subject: "Tu compra se realizó exitosamente",
    html: purchaseEmail,
  };
};

module.exports = purchaseEmail;
