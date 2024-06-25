import { createContext, useState, useMemo } from "react";

export const ColorsContext = createContext();

export const ColorsProvider = ({ children }) => {
  const [allColors, setAllColors] = useState([]);
  const value = useMemo(() => ({ allColors, setAllColors }), [allColors]);
  return (
    <ColorsContext.Provider value={value}>{children}</ColorsContext.Provider>
  );
};
