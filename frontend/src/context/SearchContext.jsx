import React, { createContext, useState, useMemo } from "react";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchBar, setSearchBar] = useState("");

  const value = useMemo(() => ({ searchBar, setSearchBar }), [searchBar]);

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};
