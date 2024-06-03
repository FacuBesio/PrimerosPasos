import React, { createContext, useState, useMemo } from "react";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchBar, setSearchBar] = useState("");
  const [searchBarTag, setSearchBarTag] = useState("");


  const value = useMemo(() => ({ searchBar, setSearchBar, searchBarTag, setSearchBarTag }), [searchBar]);

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};
