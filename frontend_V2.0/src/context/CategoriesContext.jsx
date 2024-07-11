import React, { createContext, useState, useMemo } from "react";

export const CategoriesContext = createContext();

export const CategoriesProvider = ({ children }) => {
  const [category, setCategory] = useState("");
  const value = useMemo(() => ({ category, setCategory }), [category]);
  return (
    <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
  );
};
