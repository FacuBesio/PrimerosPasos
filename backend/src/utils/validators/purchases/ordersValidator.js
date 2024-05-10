const { Order, Product } = require("../../../db");

const ordersValidator = async (orders, user) => {
  const userOrders = user.orders;
  const orders_db = await Order.findAll({
    where: { id: orders },
    include: [
      {
        model: Product,
        attributes: ["id", "brand", "name"],
      },
    ],
  });
  const ordersQuantityValidator = orders_db.length === orders.length;
  const nullPurchaseValidator = orders_db.some((orden) => orden.PurchaseId);

  if (!ordersQuantityValidator) {
    for (const id of orders) {
      const existingTest = await Order.findByPk(id);
      if (!existingTest)
        return {
          error: true,
          message: `No se pudo realizar la Compra. La orden con id '${id}' no existe.`,
        };
    }
  }

  if (nullPurchaseValidator) {
    const orderWithPurchase = orders_db.find((orden) => orden.PurchaseId);
    return {
      error: true,
      message: `La orden '${orderWithPurchase.id}' ya tiene una compra asignada. Por favor introduce únicamente ordenes sin compras asignadas.`,
    };
  }

  for (const order of orders_db) {
    if (order.dataValues.Products.length === 0) {
      return {
        error: true,
        message: `No se pudo realizar la Compra. La orden '${order.dataValues.id}' esta vacía, debe tener al menos un producto asociado.`,
      };
    }
  }

  for (const id of orders) {
    if (!userOrders.includes(id)) {
      return {
        error: true,
        message: `No se pudo realizar la Compra. La orden '${id}' no pertenece al usuario '${user.name}' con id '${user.id}'.`,
      };
    }
  }

  return { error: false };
};

module.exports = ordersValidator;
