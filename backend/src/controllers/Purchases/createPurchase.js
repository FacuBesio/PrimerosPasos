const { Purchase } = require("../../db");
const findPurchasebyId = require("./findPurchasebyId");
const findUserbyId = require("../Users/findUserbyId");
const stockDiscounter = require("./purchases_utils/stockDiscounter");
const ordersValidator = require("../../utils/validators/purchases/ordersValidator");
const formattedPurchase = require("../../utils/formatted/formattedPurchase");
const formattedUser = require("../../utils/formatted/formattedUser");

const createPurchase = async (
  orders,
  userId,
  stripe_payment_id,
  stripe_payment_status
) => {
  try {
    let newPurchase;
    const stripeData = { stripe_payment_id, stripe_payment_status };
    const userFound = await findUserbyId(userId);
    const user = formattedUser(userFound);
    const existing_orders = await ordersValidator(orders, user);

    if (!userFound) {
      return {
        message: `No se pudo realizar la Compra. Usuario ${userId} no encontrado.`,
      };
    } else if (existing_orders.error) {
      return { message: existing_orders.message };
    }

    newPurchase = await Purchase.create(stripeData);
    await newPurchase.setUser(userFound);
    await newPurchase.addOrders(orders);
    const { id } = newPurchase;

    const createdPurchase = formattedPurchase(await findPurchasebyId(id));
    newPurchase = await stockDiscounter(createdPurchase);

    return newPurchase;
  } catch (error) {
    console.log("error: ", error.message);
    return { message: error.message };
  }
};

module.exports = createPurchase;
