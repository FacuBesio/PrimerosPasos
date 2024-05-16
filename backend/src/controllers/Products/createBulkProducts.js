const { Product } = require("../../db");
const findJsonProducts = require("../../utils/json/findJsonProducts");
const findAllCategories = require("../../controllers/Categories/findAllCategories");
const createBulkCategories = require("../../controllers/Categories/createBulkCategories");
const findAllSubcategories = require("../../controllers/Subcategories/findAllSubcategories");
const createBulkSubcategories = require("../../controllers/Subcategories/createBulkSubcategories");

const createBulkProducts = async () => {
  try {
    const categories = await findAllCategories();
    if (categories.length === 0) {
      await createBulkCategories();
    }

    const subcategories = await findAllSubcategories();
    if (subcategories.length === 0) {
      await createBulkSubcategories();
    }

    const jsonProducts = await findJsonProducts();
    for (const jsonProduct of jsonProducts) {
      const {
        brand,
        name,
        color,
        size,
        description,
        price,
        stock,
        rating,
        img,
        categories,
      } = jsonProduct;
      const product = {
        brand,
        name,
        color,
        size,
        img,
        description,
        price,
        stock,
        rating,
      };

      const category_id = categories[0];
      const subcategory_id = categories[1];
      const newProduct = await Product.create(product);
      await newProduct.addCategories(category_id);
      await newProduct.addSubcategories(subcategory_id);
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = createBulkProducts;
