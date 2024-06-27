import axios from "../../config/axios";
import showUpdateNotification from "./showUpdateNotification";

const putProducts = async (newProduct, imgUrl, navigate) => {
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
  } = newProduct;

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
    console.log("productBody: ", productBody);
    const response = await axios.put(`/products`, productBody);
    console.log("response: ", response.data);
    if (response.data.updated) {
      showUpdateNotification(
        `Se actualizó exitosamente el producto ${response.data.product.name}`
      );
      navigate("/admin/manageProducts");
    }
  } catch (error) {
    console.error("Error al actualizar el producto:", error);
  }
};

export default putProducts;
