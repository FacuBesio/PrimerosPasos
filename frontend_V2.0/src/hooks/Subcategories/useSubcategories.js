import { useState, useEffect } from "react";
import getSubcategories from "../../services/Subcategories/getSubcategories";

const useSubcategories = () => {
  const [allSubcategories, setAllSubcategories] = useState({ subcategories: [] });

  let areSubcategoriesLoaded;
  allSubcategories.subcategories.length > 0
    ? (areSubcategoriesLoaded = true)
    : (areSubcategoriesLoaded = false);

  useEffect(() => {
    setTimeout(() => {
      getSubcategories().then((data) => setAllSubcategories(data));
    }, 200);
    return () => setAllSubcategories({ subcategories: [] });
  }, []);

  return { allSubcategories, areSubcategoriesLoaded };
};

export default useSubcategories;
