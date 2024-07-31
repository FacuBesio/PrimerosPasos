import axios from "../../config/axios";

const putProducts = async (updateProduct, imgUrl) => {
  let {
    id,
    enabled,
    brand,
    name,
    category,
    subcategory,
    color,
    newColor,
    size,
    newSize,
    description,
    price,
    stock,
  } = updateProduct;

  const categories = [];
  category && categories.push(category);
  subcategory && categories.push(subcategory);

  color === "addNewColor" && (color = newColor);
  size === "addNewSize" && (size = newSize);

  const productBody = {
    id,
    enabled,
    brand,
    name,
    color,
    size,
    description,
    price,
    stock,
    rating: 4,
    categories: categories,
    img: imgUrl,
  };

  try {
    const response = await axios.put(`/products`, productBody);
    return response.data;
  } catch (error) {
    console.error("Error al actualizar el producto:", error);
  }
};

export default putProducts;
