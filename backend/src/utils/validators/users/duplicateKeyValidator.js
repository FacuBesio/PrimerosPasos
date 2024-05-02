const duplicateKeyValidator = (error, userBody) => {
  const { email } = userBody;
  
  const duplicateKeyError = "llave duplicada viola restricción de unicidad «Users_email_key»";
  const duplicateKey = {
    result : false,
    message: ""
  }

  if (error.message === duplicateKeyError) {
    duplicateKey.result = true
    duplicateKey.message = `Ya existe un usuario registrado con el mail '${email}', por favor ingresá un email diferente para actualizar.`
       return duplicateKey;
  }
  
  return duplicateKey;
};

module.exports = duplicateKeyValidator;
