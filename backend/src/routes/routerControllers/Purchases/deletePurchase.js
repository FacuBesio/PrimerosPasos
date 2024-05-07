const removePurchase = require("../../../controllers/Purchases/removePurchase");

const deletePurchase = async (req, res) => {
  try {
    const { id } = req.params;
    let message;
    let removed = false;

    const purchaseDeleted = await removePurchase(id);
    purchaseDeleted === 1
      ? (message = `Compra '${id}' eliminada correctamente`) && (removed = true)
      : (message = purchaseDeleted.message);

    res.status(200).json({ removed: removed, message: message });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = deletePurchase;
