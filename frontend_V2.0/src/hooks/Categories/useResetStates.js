import { useContext, useEffect } from "react";
import {
  CategoriesContext,
  FilterContext,
  SearchContext,
  SortContext,
  TagsContext,
} from "../../context";

const useResetStates = () => {
  const { setCategory, setSelectedCategory } = useContext(CategoriesContext);
  const { setFilter } = useContext(FilterContext);
  const { setSorter } = useContext(SortContext);
  const { setSearch } = useContext(SearchContext);
  const { setCategoryTag, setFilterTags, setSearchTag } =
    useContext(TagsContext);

  useEffect(() => {
    setCategory("");
    setSelectedCategory("");
    setCategoryTag("");
    setFilter("");
    setFilterTags("");
    setSorter("");
    setSearch("");
    setSearchTag("");
  }, []);
};

export default useResetStates;
