import { createContext, useState, useMemo } from "react";

export const SizesContext = createContext();

export const SizesProvider = ({ children }) => {
  const [allSizes, setAllSizes] = useState([]);
  const value = useMemo(() => ({ allSizes, setAllSizes }), [allSizes]);
  return (
    <SizesContext.Provider value={value}>{children}</SizesContext.Provider>
  );
};
