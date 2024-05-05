const removeCategory = require("../../../controllers/Categories/removeCategory");

const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    let message;
    let removed = false;

    const categoryDeleted = await removeCategory(id);
    categoryDeleted === 1
      ? (message = `Categoria '${id}' eliminada correctamente`) &&
        (removed = true)
      : (message = categoryDeleted.message);

    res.status(200).json({ removed: removed, message: message });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = deleteCategory;
