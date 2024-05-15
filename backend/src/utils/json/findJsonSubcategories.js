const jsonSubcategoriesReader = require("./jsonSubcategoriesReader");

const findJsonSubcategories = async () => {
  try {
    const jsonSubcategories = await jsonSubcategoriesReader();
    return jsonSubcategories.subcategories;
  } catch (error) {
    console.error("Error al leer el archivo: ", error);
    throw new Error("Error al leer el archivo: ", error);
  }
};

module.exports = findJsonSubcategories;
