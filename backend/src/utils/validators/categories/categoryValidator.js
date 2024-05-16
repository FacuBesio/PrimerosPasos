const formattedCategory = require("../../../utils/formatted/formattedCategory");

const categoryValidator = async (id, category) => {
  const validator = {
    error: false,
    message: "",
  };

  if (!category) {
    validator.error = true;
    validator.message = `No existe una Categoría con id '${id}' para eliminar`;
    return validator;
  }

  category = formattedCategory(category);
  if (category.products.length > 0) {
    validator.error = true;
    validator.message = `La Categoría '${category.name}', todavía tiene productos asociados. Antes de eliminar la categoría, por favor actualiza los productos de la categoría '${category.name}' a nueva categoría. Para poder eliminar la categoría no debe tener ningún producto asociado.`;
    return validator;
  }

  if (category.subcategories.length > 0) {
    validator.error = true;
    validator.message = `La Categoría '${category.name}', todavía tiene subcategorías asociadas. Antes de eliminar la categoría, por favor actualiza las subcategorías de la categoría '${category.name}' a nueva categoría. Para poder eliminar la categoría no debe tener ninguna subcategoría asociada.`;
    return validator;
  }

  return validator;
};

module.exports = categoryValidator;
