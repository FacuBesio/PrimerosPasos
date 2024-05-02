const ownerRoleValidator = (userRequesting) => {
  if (userRequesting.role !== "owner") {
    return {
      error: true,
      message: `Se necesitan permisos de Owner para ingresar. El usuario con id '${userRequesting.id}' actualmente es '${userRequesting.role}'.`,
    };
  }

  if (!userRequesting.enabled) {
    return {
      error: true,
      message: `El usuario debe estar activo para ingresar. El usuario con id '${userRequesting.id}' actualmente se encuntra inhabilitado.`,
    };
  }

  return {
    error: false,
  };
};

module.exports = ownerRoleValidator;
