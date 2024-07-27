import React, { createContext, useState, useMemo } from "react";

export const TagsContext = createContext();

export const TagsProvider = ({ children }) => {
  const [categoryTag, setCategoryTag] = useState("");
  const [filterTags, setFilterTags] = useState("");
  const [searchTag, setSearchTag] = useState("");

  const value = useMemo(
    () => ({
      categoryTag,
      setCategoryTag,
      filterTags,
      setFilterTags,
      searchTag,
      setSearchTag,
    }),
    [categoryTag, filterTags, searchTag]
  );

  return <TagsContext.Provider value={value}>{children}</TagsContext.Provider>;
};
