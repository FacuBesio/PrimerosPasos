import React, { createContext, useState, useMemo } from "react";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [filter, setFilter] = useState([]);

  const value = useMemo(() => ({ allProducts, setAllProducts, filter, setFilter }), [allProducts, filter]);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
