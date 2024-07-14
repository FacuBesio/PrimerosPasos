import React, { createContext, useState, useMemo } from "react";

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [filter, setFilter] = useState({});
  const value = useMemo(() => ({ filter, setFilter }), [filter]);
  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};
