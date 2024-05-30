import axios from "../../config/axios";

const postOrder = async (user, productToAdd) => {
  const userId = user;
  const products = [productToAdd.id, productToAdd.cantidad]

 console.log(products);


  try {
//     const response = await axios.post(`/orders`, {userId, products} );
//  console.log(response.data);
  } catch (error) {
    console.error("Error al obtener Productos:", error);
  }
};

export default postOrder;
