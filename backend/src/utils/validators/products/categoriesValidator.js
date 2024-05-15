const findCategorybyId = require("../../../controllers/Categories/findCategorybyId");
const findSubcategorybyId = require("../../../controllers/Subcategories/findSubcategorybyId");
const formattedSubcategory = require("../../../utils/formatted/formattedSubcategory");

const categoriesValidator = async (categories) => {
  const validator = {
    error: false,
    message: "",
  };

  if (categories.length > 2) {
    validator.error = true;
    validator.message = `Se admiten como máximo hasta dos valores de categorías. El primer valor corresponderá a una categoría y el segundo valor a una subcategoría (opcional).`;
    return validator;
  }

  const category_id = categories[0];
  const category = await findCategorybyId(category_id);
  if (!category) {
    validator.error = true;
    validator.message = `La categoría con id '${category_id}' no existe. Por favor ingresa un categoría válida.`;
    return validator;
  }

  let subcategory_id;
  if (categories.length === 2) {
    subcategory_id = categories[1];
    let subcategory = await findSubcategorybyId(subcategory_id);
    subcategory = subcategory ? formattedSubcategory(subcategory) : null;

    if (!subcategory) {
      validator.error = true;
      validator.message = `La subcategoría con id '${subcategory_id}' no existe. Por favor ingresa un subcategoría válida.`;
      return validator;
    } else if (subcategory.category.id !== category.id) {
      validator.error = true;
      validator.message = `La subcategoría '${subcategory.name}'(id: '${subcategory_id}') no pertenece a la categoría '${category.name}'(id: '${category.id}'). La subcategoría '${subcategory.name}' pertenece a la categoría '${subcategory.category.name}'(id: '${subcategory.category.id}').`;
      return validator;
    }
  }

  return validator;
};

module.exports = categoriesValidator;
