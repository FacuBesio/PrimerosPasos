const { Category, Product, Subcategory  } = require("../../db");


const findAllCategories = async () => {

  const categories = await Category.findAll({
    include: [
      {
        model: Product,
        attributes: ["name"], 
        through: {
          attributes: [], 
        },
      },
      {
        model: Subcategory,
        attributes: ["id", "name"], 
      },
    ],
    order: [['id', 'ASC']],
  });

  return categories;
};

module.exports = findAllCategories;
