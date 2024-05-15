const createCategory = require("../../../controllers/Categories/createCategory");
const formattedCategory = require("../../../utils/formatted/formattedCategory");


const postCategories = async (req, res) => {
  const { name } = req.body;
  
  if (!name || name === "") {
    return res
      .status(200)
      .json({
        created: false,
        error: `Para crear una Categoría es necesario indicar un nombre.`,
      });
  }

  try {
    const newCategory = await createCategory({ name });
    newCategory.hasOwnProperty("id")
      ? res.status(201).json({ created: true, category: formattedCategory(newCategory) })
      : res.status(200).json({ created: false, message: newCategory.message });
   } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = postCategories;
