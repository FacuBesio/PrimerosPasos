import axios from "../../../src/config/axios";

const getFilterByCategory = async (filter) => {
  try {
    if (filter) {
      const response = await axios.get(`/categories/${filter}`);
      console.log(response.data);
    }
  } catch (error) {
    console.error("Error al obtener Categorías:", error);
  }
};

export default getFilterByCategory;

// let testArray = [1, 2];

// let palabraUnida = testArray.join("&filterCategory=");
// // console.log(palabraUnida);
// let string = "filterCategory=";

// if (testArray.length > 0) {
//   string = string + palabraUnida;
// } else {
//   string = "";
// }
// console.log(string);
