import { useState, useEffect } from "react";
import getBrands from "../../services/Brands/getBrands";

const useBrands = () => {
  const [allBrands, setAllBrands] = useState([]);

  useEffect(() => {
    getBrands().then((data) => setAllBrands(data));
  }, []);

  return { allBrands };
};

export default useBrands;
