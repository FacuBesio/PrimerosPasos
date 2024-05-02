const ownerRoleValidator = require("./ownerRoleValidator");
const findUserbyId = require("../../../controllers/Users/findUserbyId");

const ownerValidator = async (owner_id) => {
  const isOwner = {
    result: true,
    message: "",
  };

  if (!owner_id) {
    isOwner.result = false;
    isOwner.message =
      "No se ha ingresado un owner_id para poder verificar los roles del solicitante.";
    return isOwner;
  }

  const userRequesting = await findUserbyId(owner_id);
  if (!userRequesting) {
    isOwner.result = false;
    isOwner.message = `No se encontró el usuario con id '${owner_id}'`;
    return isOwner;
  }

  const ownerRole = ownerRoleValidator(userRequesting);
  if (ownerRole.error) {
    isOwner.result = false;
    isOwner.message = ownerRole.message;
    return isOwner;
  }

  return isOwner;
};

module.exports = ownerValidator;
