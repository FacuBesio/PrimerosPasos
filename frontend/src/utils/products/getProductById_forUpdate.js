import axios from "../../config/axios";

const getProductById_forUpdate = async (id, setProduct) => {
  try {
    const response = await axios.get(`/products/${id}`);
    const { product } = response.data;
    const {
      enabled,
      brand,
      name,
      categories,
      color,
      size,
      description,
      price,
      stock,
      subcategories,
      img,
    } = product;

    let category = "";
    if (categories && categories.length > 0) {
      category = categories[0].id;
    }

    let subcategory = "";
    if (subcategories && subcategories.length > 0) {
      subcategory = subcategories[0].id;
    }

    setProduct({
      id,
      enabled,
      brand,
      name,
      category,
      color,
      size,
      description,
      price,
      stock,
      subcategory,
      img,
    });
  } catch (error) {
    console.error("Error al obtener producto:", error);
  }
};

export default getProductById_forUpdate;
