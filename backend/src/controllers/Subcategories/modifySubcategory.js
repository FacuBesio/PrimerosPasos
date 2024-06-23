const { Subcategory } = require("../../db");
const findSubcategorybyId = require("./findSubcategorybyId");
const errorsValidator = require("../../utils/validators/categories/errorsValidator");
const modifyProducts = require("./modifyBulkProducts");

const modifySubcategory = async (id, enabled, name, categoryId) => {
  try {
    let updatedSubcategory = await Subcategory.update(
      { enabled, name, categoryId },
      {
        where: {
          id: id,
        },
      }
    );

    if (updatedSubcategory[0] === 0) {
      return { message: `Subcategoría ${id} no encontrada` };
    }

    updatedSubcategory = await findSubcategorybyId(id);
    const subcategory_products = updatedSubcategory.dataValues.Products.map(
      (product) => product.id
    );
    const category_id = updatedSubcategory.dataValues.categoryId
    for (const product_id of subcategory_products) {
      await modifyProducts(product_id,category_id)
    }


    return updatedSubcategory.dataValues;
  } catch (error) {
    console.log("error: ", error.message);
    const errorMessage = errorsValidator({ name }, error);
    return { message: errorMessage };
  }
};

module.exports = modifySubcategory;
