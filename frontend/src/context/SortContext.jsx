import React, { createContext, useState, useMemo } from "react";

export const SortContext = createContext();

export const SortProvider = ({ children }) => {
  const [sorter, setSorter] = useState("");
  const [sorterByPrice, setSorterByPrice] = useState("");
  const [sorterByRating, setSorterByRating] = useState("");

  const value = useMemo(
    () => ({
      sorter,
      setSorter,
      sorterByPrice,
      setSorterByPrice,
      sorterByRating,
      setSorterByRating,
    }),
    [sorter, sorterByPrice, sorterByRating]
  );

  return <SortContext.Provider value={value}>{children}</SortContext.Provider>;
};
