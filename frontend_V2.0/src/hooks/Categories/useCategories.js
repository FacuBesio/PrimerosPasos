import { useState, useEffect } from "react";
import getCategories from "../../services/Categories/getCategories";

const useCategories = () => {
  const [allCategories, setAllCategories] = useState({ categories: [] });

  let areCategoriesLoaded;
  allCategories.categories.length > 0
    ? (areCategoriesLoaded = true)
    : (areCategoriesLoaded = false);

  useEffect(() => {
    setTimeout(() => {
      getCategories().then((data) => setAllCategories(data));
    }, 300);
    return () => setAllCategories({ categories: [] });
  }, []);

  return { allCategories, areCategoriesLoaded };
};

export default useCategories;
