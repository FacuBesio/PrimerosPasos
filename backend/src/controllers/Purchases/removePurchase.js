const { Purchase } = require("../../db");
const findPurchasebyId = require("./findPurchasebyId");

const removePurchase = async (id) => {
  const purchase = await findPurchasebyId(id);
  if (!purchase) {
    return {
      message: `No existe una Compra con el id '${id}' para eliminar`,
    };
  }

  try {
    purchaseDestroyed = await Purchase.destroy({
      where: { id: id },
    });
    return purchaseDestroyed;
  } catch (error) {
    console.error(`Error al eliminar compra ${id}: ${error.message}`);
  }
};

module.exports = removePurchase;
