const { User } = require("../../db");
const { OWNER_EMAIL } = require("../../config/ownerCredentials");
const findUserbyId = require("./findUserbyId");
const duplicateKeyValidator = require("../../utils/validators/users/duplicateKeyValidator");

const modifyUser = async (id, userBody) => {
  const user = await findUserbyId(id);

  if (user && user.email === OWNER_EMAIL)
    return {
      message: `Los datos del Owner no pueden ser modificados por este medio.`,
    };

  try {
    let updatedUser = await User.update(userBody, { where: { id: id } });
    if (updatedUser[0] === 0) {
      return { message: `Usuario '${id}' no encontrado` };
    }
    updatedUser = await findUserbyId(id);
    return updatedUser.dataValues;
  } catch (error) {
    const duplicateKey = duplicateKeyValidator(error, userBody);
    if (duplicateKey.result) {
      return { message: duplicateKey.message };
    }
    return `Error al actualizar el usuario ${id}: ${error.message}`;
  }
};

module.exports = modifyUser;
