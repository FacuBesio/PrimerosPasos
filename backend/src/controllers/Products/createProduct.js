const { Product } = require("../../db");
const findProductbyId = require("./findProductbyId");
const findCategorybyId = require("../Categories/findCategorybyId");
const findSubcategorybyId = require("../Subcategories/findSubcategorybyId");
const errorsValidator = require("../../utils/validators/products/errors/errorsValidator");
const formattedCategory = require("../../utils/formatted/formattedCategory");
const formattedSubcategory = require("../../utils/formatted/formattedSubcategory");

const createProduct = async ({ product, categories }) => {
  try {
    if (!categories || categories.length === 0) {
      throw new Error("Debe asignar al menos una categoría al producto.");
    } else if (categories.length > 2) {
      throw new Error(
        "Se admiten como máximo hasta dos valores de categorías. El primer valor corresponderá a una categoría y el segundo valor a una subcategoría (opcional)."
      );
    }

    const category = categories[0];
    const categoryTest = await findCategorybyId(category);
    if (!categoryTest)
      throw new Error(
        `La categoría con id '${category}' no existe. Por favor ingresa un categoría válida.`
      );

    let subcategory;
    if (categories.length === 2) {
      subcategory = categories[1];
      const subcategoryTest = formattedSubcategory (await findSubcategorybyId(subcategory));
      if (!subcategoryTest) {
        throw new Error(
          `La subcategoría con id '${subcategory}' no existe. Por favor ingresa un subcategoría válida.`
        );
      } else if (subcategoryTest.category.id !==  category){
        throw new Error(
          `La subcategoría '${subcategoryTest.name}'(id: '${subcategory}') no pertenece a la categoría '${categoryTest.name}'(id: '${categoryTest.id}'). La subcategoría '${subcategoryTest.name}' pertenece a la categoría '${subcategoryTest.category.name}'(id: '${subcategoryTest.category.id}').`
        );
      }
    }

    const newProduct = await Product.create(product);
    await newProduct.addCategories(category);
    await newProduct.addSubcategories(subcategory);
    const { id } = newProduct;
    const createdProduct = await findProductbyId(id);
    return createdProduct.dataValues;
  } catch (error) {
    console.log("error: ", error.message);
    const errorMessage = errorsValidator(product, categories, error);
    return { message: errorMessage };
  }
};

module.exports = createProduct;
