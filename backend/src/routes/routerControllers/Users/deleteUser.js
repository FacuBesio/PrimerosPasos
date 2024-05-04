const removeUser = require("../../../controllers/Users/removeUser");

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    let message;
    let removed = false;

    const userDeleted = await removeUser(id);
    userDeleted === 1
      ? (message = `Usuario '${id}' eliminado correctamente`) &&
        (removed = true)
      : (message = userDeleted.message);
      
    res.status(200).json({ removed: removed, message: message });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = deleteUser;
