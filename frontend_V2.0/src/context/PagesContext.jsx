import React, { createContext, useState, useMemo } from "react";

export const PagesContext = createContext();

export const PagesProvider = ({ children }) => {
  const [page, setPage] = useState(1);
  const value = useMemo(() => ({ page, setPage }), [page]);
  return (
    <PagesContext.Provider value={value}>{children}</PagesContext.Provider>
  );
};
