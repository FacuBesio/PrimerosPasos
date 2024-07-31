import { useState, useEffect, useContext } from "react";
import getSubcategories from "../../services/Subcategories/getSubcategories";
import { AdminContext } from "../../context";

const useSubcategories = () => {
  const { itemRemoved, setItemRemoved } = useContext(AdminContext);
  const [allSubcategories, setAllSubcategories] = useState({
    subcategories: [],
  });

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

  useEffect(() => {
    if (itemRemoved) {
      setAllSubcategories({ subcategories: [] });
      setTimeout(() => {
        getSubcategories().then((data) => setAllSubcategories(data));
      }, 200);
      setItemRemoved(false);
    }
  }, [itemRemoved]);

  return { allSubcategories, areSubcategoriesLoaded };
};

export default useSubcategories;
