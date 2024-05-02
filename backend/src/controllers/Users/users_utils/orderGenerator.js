const createOrder = require("../../Orders/createOrder");
const modifyOrder = require("../../Orders/modifyOrder");

const orderGenerator = async (user) => {
  let products = [[1]];
  const newOrder = await createOrder(products, user.id);

  let productsToAdd;
  let productsToRemove = [[1]];
  await modifyOrder(newOrder.id, productsToAdd, productsToRemove);
};

module.exports = orderGenerator;
