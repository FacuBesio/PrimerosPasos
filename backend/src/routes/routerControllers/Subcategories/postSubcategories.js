const createSubcategory = require("../../../controllers/Subcategories/createSubcategory");
const findCategorybyId = require("../../../controllers/Categories/findCategorybyId");
const formattedSubcategory = require("../../../utils/formatted/formattedSubcategory");


const postSubcategories = async (req, res) => {
  const { name, categoryId } = req.body;

  if (!name || name === "") {
    return res.status(200).json({
      created: false,
      error: `Para crear una Subcategoría es necesario indicar un nombre.`,
    });
  }

  if (!categoryId || categoryId === "" || categoryId === 0) {
    return res.status(200).json({
      created: false,
      message: `Para crear una Subcategoría es necesario asociarla una categoría.`,
    });
  } else {
    const category = await findCategorybyId(categoryId);
    if (!category) {
      return res.status(200).json({
        created: false,
        message: `La categoría con id '${categoryId}' no existe. Para crear una subcategoría se la debe asociar a una categoría existente.`,
      });
    }
  }

  try {
    const newSubcategory = await createSubcategory(name, categoryId);
    if (newSubcategory.hasOwnProperty("id")) {
      res.status(201).json({ created: true, subcategory: formattedSubcategory(newSubcategory) });
    } else {
      res.status(200).json({ created: false, message: newSubcategory.message });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = postSubcategories;
