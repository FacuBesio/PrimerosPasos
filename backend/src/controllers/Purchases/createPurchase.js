const { Purchase, User, Order } = require("../../db");
const findPurchasebyId = require("./findPurchasebyId");
const stockDiscounter = require("./purchases_utils/stockDiscounter");
const existing_orders = require("../../utils/validators/purchases/existing_orders");
const formattedPurchase = require("../../utils/formatted/formattedPurchase");

const createPurchase = async (
  orders,
  userId,
  stripe_payment_id,
  stripe_payment_status
) => {
  try {
    let newPurchase;
    const stripeData = { stripe_payment_id, stripe_payment_status };
    const userFound = await User.findByPk(userId);
    const orders_db = await Order.findAll({ where: { id: orders } });
    const ordersValidator = existing_orders(orders_db, orders);

    if (!userFound) {
      return {
        message: `No se pudo crear la Compra. Usuario ${userId} no encontrado.`,
      };
    } else if (ordersValidator.error) {
      return { message: ordersValidator.message };
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
