import React, { createContext, useState, useMemo } from "react";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [serach, setSearch] = useState("");
  const value = useMemo(() => ({ serach, setSearch }), [serach]);
  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};
