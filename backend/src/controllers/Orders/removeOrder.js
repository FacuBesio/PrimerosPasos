const { Order } = require("../../db");
const findOrderbyId = require("./findOrderbyId");


const removeOrder = async (id) => {
  const order = await findOrderbyId(id);
  if (!order) {
    return {
      message: `No existe una Orden con id '${id}' para eliminar`,
    };
  }

  try {
    orderDestroyed = await Order.destroy({
      where: { id: id },
    });
    return orderDestroyed;
  } catch (error) {
    console.error(`Error al eliminar orden ${id}: ${error.message}`);
  }
};

module.exports = removeOrder;
