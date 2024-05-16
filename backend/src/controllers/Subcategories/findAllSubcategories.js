const { Subcategory, Product, Category } = require("../../db");

const findAllSubcategories = async () => {
  const subcategories = await Subcategory.findAll({
    include: [
      {
        model: Product,
        attributes: ["id", "name"], 
        through: {
          attributes: [], 
        },
      },
      {
        model: Category,
        attributes: ["id", "name"], 
      },
    ],
    order: [['id', 'ASC']],
  });

  return subcategories;
};

module.exports = findAllSubcategories;
