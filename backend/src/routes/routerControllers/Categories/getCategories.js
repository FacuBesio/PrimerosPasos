const findAllCategories = require("../../../controllers/Categories/findAllCategories");
const formattedCategories = require("../../../utils/formatted/formattedCategories");
const createBulkCategories = require("../../../controllers/Categories/createBulkCategories");
const createBulkSubcategories = require("../../../controllers/Subcategories/createBulkSubcategories");
const notFoundValidator = require("../../../utils/validators/products/notFoundValidator");


const getCategories = async (req, res) => {
  const { filterCategoryByName = "" } = req.query;
  let categories;

  try {
    if (filterCategoryByName !== "") {
      categories = await findAllCategories(filterCategoryByName);
      if (categories.length === 0) {
        return res.status(200).json( {
          totalResults: 0,
          categories: [],
          message: `No se ha encontrado ninguna Categoría que coincida con el nombre '${filterCategoryByName}'`,
      });
      }
    } else {
      categories = await findAllCategories();
      if (categories.length === 0) {
        await createBulkCategories();
        await createBulkSubcategories();
        categories = await findAllCategories();
      }
    }

    categories = formattedCategories(categories);
    return res.status(200).json({
      totalResults: categories.length,
      categories: categories,
      message: `Se ha completado la consulta exitosamente`,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getCategories;
