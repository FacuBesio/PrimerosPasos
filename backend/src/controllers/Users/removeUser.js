const { User, Order, Purchase } = require("../../db");
const { OWNER_EMAIL } = require("../../config/ownerCredentials");
const findUserbyId = require("./findUserbyId");

const removeUser = async (id) => {
  const user = await findUserbyId(id);
  if (!user) {
    return {
      message: `No existe un Usuario con id '${id}' para eliminar`,
    };
  } else if (user.email === OWNER_EMAIL) {
    return {
      message: `Los datos del Owner no pueden ser modificados por este medio.`,
    };
  }

  try {
    const userDestroyed = await User.destroy({
      where: { id: id },
      include: [Order, Purchase],
    });
    return userDestroyed;
  } catch (error) {
    console.error(`Error al eliminar usuario ${id}: ${error.message}`);
  }
};

module.exports = removeUser;
