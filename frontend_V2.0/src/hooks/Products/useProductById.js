import { useState, useEffect } from "react";
import getProductById from "../../services/Products/getProductById";

const useProductById = (id) => {
  const [response, setResponse] = useState(false);
  const { product } = response;

  let isProductLoaded;
  product && product.hasOwnProperty("id")
    ? (isProductLoaded = true)
    : (isProductLoaded = false);

  useEffect(() => {
    setTimeout(() => {
      getProductById(id).then((data) => setResponse(data));
      window.scrollTo(0, 0);
    }, 150);
  }, [id]);

  return { product, isProductLoaded };
};

export default useProductById;
