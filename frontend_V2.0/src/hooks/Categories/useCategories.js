import { useState, useEffect } from "react";
import getCategories from "../../services/Categories/getCategories";

const useCategories = () => {
  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    getCategories().then((data) => setAllCategories(data));
  }, []);

  return { allCategories };
};

export default useCategories;
