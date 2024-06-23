import axios from "../../config/axios";
import showCreateNotification from "./showCreateNotification";

const postProducts = async (newProduct, imgUrl, navigate) => {
  let {
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
  } = newProduct;

  const categories = [];
  category && categories.push(category);
  subcategory && categories.push(subcategory);

  color === "addNewColor" && (color = newColor);
  size === "addNewSize" && (size = newSize);

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
    if (response.data.created) {
      showCreateNotification(
        `Se creó exitosamente el producto ${response.data.product.name}`
      );
      navigate("/admin/manageProducts");
    }
  } catch (error) {
    console.error("Error al crear el producto:", error);
  }
};

export default postProducts;
