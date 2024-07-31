import { useState, useEffect, useContext } from "react";
import getCategories from "../../services/Categories/getCategories";
import { AdminContext } from "../../context";

const useCategories = () => {
  const { itemRemoved, setItemRemoved } = useContext(AdminContext);
  const [allCategories, setAllCategories] = useState({ categories: [] });

  let areCategoriesLoaded;
  allCategories.categories.length > 0
    ? (areCategoriesLoaded = true)
    : (areCategoriesLoaded = false);

  useEffect(() => {
    setTimeout(() => {
      getCategories().then((data) => setAllCategories(data));
    }, 200);
    return () => setAllCategories({ categories: [] });
  }, []);

  useEffect(() => {
    if (itemRemoved) {
      setAllCategories({ categories: [] });
      setTimeout(() => {
        getCategories().then((data) => setAllCategories(data));
      }, 200);
      setItemRemoved(false);
    }
  }, [itemRemoved]);

  return { allCategories, areCategoriesLoaded };
};

export default useCategories;
