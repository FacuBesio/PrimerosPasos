import React, { createContext, useState, useMemo } from "react";

export const CategoriesContext = createContext();

export const CategoriesProvider = ({ children }) => {
  const [allCategories, setAllCategories] = useState([]);
  const [filterCategories, setFilterCategories] = useState("");

  const value = useMemo(
    () => ({
      allCategories,
      setAllCategories,
      filterCategories,
      setFilterCategories,
    }),
    [allCategories, filterCategories]
  );

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
