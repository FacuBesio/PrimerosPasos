const findAllCategories = require("../../../controllers/Categories/findAllCategories");
const formattedCategories = require("../../../utils/formatted/formattedCategories");
const emptyTable = require("../../../utils/validators/categories/emptyTable");

const getCategories = async (req, res) => {
  const { filterCategoryByName = "" } = req.query;
  let categories;

  try {
    if (filterCategoryByName !== "") {
      categories = await findAllCategories(filterCategoryByName);
      if (categories.length === 0) {
        return res.status(200).json({
          totalResults: 0,
          categories: [],
          message: `No se ha encontrado ninguna Categoría que coincida con el nombre '${filterCategoryByName}'`,
        });
      }
    } else {
      categories = await findAllCategories();
      if (categories.totalResults === 0) {
        return res.status(200).json(emptyTable());
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
