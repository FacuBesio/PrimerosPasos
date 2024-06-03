import React, { createContext, useState, useMemo } from "react";

export const CategoriesContext = createContext();

export const CategoriesProvider = ({ children }) => {
  const [allCategories, setAllCategories] = useState([]);
  const [categoryTag, setCategoryTag] = useState("");
  const [filterCategories, setFilterCategories] = useState("");

  const value = useMemo(
    () => ({
      allCategories,
      setAllCategories,
      categoryTag,
      setCategoryTag,
      filterCategories,
      setFilterCategories,
    }),
    [allCategories, categoryTag]
  );

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
