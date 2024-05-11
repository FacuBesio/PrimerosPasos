const nodemailer = require("nodemailer");
const createPurchase = require("../../../controllers/Purchases/createPurchase");
const formattedPurchase = require("../../../utils/formatted/formattedPurchase");
const transporter = require("../../../config/mailer");
const purchaseEmail = require("../../../utils/mails/purchases/purchaseEmail");

const postPurchase = async (req, res) => {
  const { orders, userId, stripe_payment_id, stripe_payment_status } = req.body;

  if (
    !orders ||
    orders.length === 0 ||
    !userId ||
    !stripe_payment_id ||
    !stripe_payment_status
  ) {
    return res.status(200).json({
      created: false,
      message:
        "Para crear una Compra, debe tener todos los campos requeridos completos: Orden, id_usuario, stripe_payment_id, stripe_payment_status.",
    });
  }

  try {
    const newPurchase = await createPurchase(
      orders,
      userId,
      stripe_payment_id,
      stripe_payment_status
    );

    if (newPurchase.hasOwnProperty("id")) {
      const userEmail = newPurchase.User.dataValues.email;
      const email = purchaseEmail(userEmail, newPurchase);
      transporter.sendMail(email);
      res.status(201).json({ created: true, purchase: newPurchase });
    } else {
      res.status(200).json({ created: false, message: newPurchase.message });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = postPurchase;
