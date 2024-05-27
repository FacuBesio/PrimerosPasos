import React, { createContext, useState } from "react";

// Crear el contexto
export const AppContext = createContext();

// Crear el proveedor del contexto
export const AppProvider = ({ children }) => {

  const [state, setState] = useState({
    allBrands: [],
    allCategories: [],
    allProducts: [],
    categoryTag: "",
    filter: [],
    filterCategories: "",
    searchBar: "",
    sorter: "",
  });

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};
