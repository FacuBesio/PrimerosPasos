import React, { createContext, useState, useMemo } from "react";

export const CategoriesContext = createContext();

export const CategoriesProvider = ({ children }) => {
  const [allCategories, setAllCategories] = useState([]);
  const [allSubCategories, setAllSubCategories] = useState([]);
  const [categoryTag, setCategoryTag] = useState("");
  const [filterCategories, setFilterCategories] = useState("");

  const value = useMemo(
    () => ({
      allCategories,
      setAllCategories,
      allSubCategories,
      setAllSubCategories,
      categoryTag,
      setCategoryTag,
      filterCategories,
      setFilterCategories,
    }),
    [allCategories, allSubCategories, categoryTag]
  );

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
