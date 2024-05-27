import React, { createContext, useState, useMemo } from "react";

export const CategoryTagContext = createContext();

export const CategoryTagProvider = ({ children }) => {
  const [categoryTag, setCategoryTag] = useState("");

  const value = useMemo(() => ({ categoryTag, setCategoryTag }), [categoryTag]);

  return (
    <CategoryTagContext.Provider value={value}>
      {children}
    </CategoryTagContext.Provider>
  );
};
