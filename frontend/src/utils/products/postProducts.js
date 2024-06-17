import axios from "../../config/axios";

const postProducts = async (newProduct, imgUrl, navigate) => {
  const {
    brand,
    name,
    category,
    subcategory,
    color,
    size,
    description,
    price,
    stock,
  } = newProduct;

  const categories = [];
  category && categories.push(category);
  subcategory && categories.push(subcategory);

  const productBody = {
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
    const response = await axios.post(`/products`, productBody);
    response.data.created && navigate("/admin/manageProducts");
  } catch (error) {
    console.error("Error al crear el producto:", error);

  }
};

export default postProducts;
