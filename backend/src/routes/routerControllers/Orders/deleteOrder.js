const removeOrder = require("../../../controllers/Orders/removeOrder");

const deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;
    let message;
    let removed = false;

    const orderDeleted = await removeOrder(id);
    orderDeleted === 1
      ? (message = `Orden '${id}' eliminada correctamente`) && (removed = true)
      : (message = orderDeleted.message);

    res.status(200).json({ removed: removed, message: message });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = deleteOrder;
