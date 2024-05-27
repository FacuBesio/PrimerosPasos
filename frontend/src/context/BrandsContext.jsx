import React, { createContext, useState, useMemo } from "react";

export const BrandsContext = createContext();

export const BrandsProvider = ({ children }) => {
  const [allBrands, setAllBrands] = useState([]);
  const value = useMemo(() => ({ allBrands, setAllBrands }), [allBrands]);
  return (
    <BrandsContext.Provider value={value}>{children}</BrandsContext.Provider>
  );
};
