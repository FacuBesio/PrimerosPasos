import React, { createContext, useState, useMemo } from "react";

export const SortContext = createContext();

export const SortProvider = ({ children }) => {
  const [sorter, setSorter] = useState("");

  const value = useMemo(() => ({ sorter, setSorter }), [sorter]);

  return <SortContext.Provider value={value}>{children}</SortContext.Provider>;
};
