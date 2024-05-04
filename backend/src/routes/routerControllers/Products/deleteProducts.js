const removeProduct = require("../../../controllers/Products/removeProduct");

const deleteProducts = async (req, res) => {
  try {
    const { id } = req.params;
    let message;
    let removed = false;

    const productDeleted = await removeProduct(id);
    productDeleted === 1
      ? (message = `Producto '${id}' eliminado correctamente`) &&
        (removed = true)
      : (message = `No existe un Producto con el id '${id}' para eliminar`);

    res.status(200).json({ removed: removed, message: message });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = deleteProducts;
