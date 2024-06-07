import axios from "../../config/axios";

const createPreference = async (products) => {
    if(products.length > 0){
  try {
    const response = await axios.post(`/payment-session/create_preference`, {
      title: products[0].name,
      quantity: products[0].cantidad,
      price: products[0].price,
    });

    //?CHECK RETURN DE ID
    const { id } = response.data;
     return id;
  } catch (error) {
    console.error("Error al obtener producto:", error);
  }
}
};

export default createPreference;
