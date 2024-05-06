const createPurchase = require("../../../controllers/Purchases/createPurchase");
const formattedPurchase = require("../../../utils/formatted/formattedPurchase");
const nodemailer = require("nodemailer");
const {
  Purchase,
  User,
  Order,
  Product,
  Order_Product,
} = require("../../../db");

const postPurchase = async (req, res) => {
  const { orders, userId } = req.body;
  let { stripe_payment_id, stripe_payment_status } = req.body;

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
    newPurchase.hasOwnProperty("id")
      ? res.status(201).json({ created: true, purchase: newPurchase})
      : res.status(200).json({ created: false, message: newPurchase.message });

    // if (!newPurchase.hasOwnProperty("id")) {
    //   return res
    //     .status(400)
    //     .json({ created: false, message: newPurchase.message });
    // }

    // // Busca la compra recién creada con el usuario asociado incluido
    // const purchaseWithUser = await Purchase.findOne({
    //   where: { id: newPurchase.id },
    //   include: { model: User },
    // });

    // if (!purchaseWithUser) {
    //   return res
    //     .status(404)
    //     .json({ created: false, message: "Compra no encontrada" });
    // }

    // res.status(201).json({ created: true, purchase: newPurchase });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = postPurchase;
