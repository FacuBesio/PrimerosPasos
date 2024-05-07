const findOrderbyId = require("../../Orders/findOrderbyId");
const findProductbyId = require("../../Products/findProductbyId");
const modifyProduct = require("../../Products/modifyProduct");
const formattedOrder = require("../../../utils/formatted/formattedOrder");
const formattedProduct_forPurchases = require("../../../utils/formatted/formattedProduct_forPurchases");
const productsWithoutStock = require("../../../utils/formatted/productsWithoutStock");

const stockDiscounter = async (createdPurchase) => {
  if (createdPurchase) {
    let newPurchase = createdPurchase;

    const { orders } = createdPurchase;
    newPurchase = createdPurchase;
    newPurchase.orders = [];
    for (const order of orders) {
      const orderData = formattedOrder(await findOrderbyId(order.id));
      const { products } = orderData;
      newPurchase.orders = [...newPurchase.orders, { id: order.id, products }];
   
      for (const product of products) {
        let aux_product = formattedProduct_forPurchases(
          await findProductbyId(product.id)
        );
        if (product.stock >= product.cantidad) {
          aux_product.stock = product.stock - product.cantidad;
          await modifyProduct(aux_product);
        }
      }
    }
    return newPurchase;
  }
};

module.exports = stockDiscounter;
