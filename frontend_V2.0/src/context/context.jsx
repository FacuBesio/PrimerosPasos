import { CategoriesProvider } from "./CategoriesContext";
import { FilterProvider } from "./FilterContext";
import { SearchProvider } from "./SearchContext";
import { TagsProvider } from "./TagsContext";

const AppProvider = ({ children }) => {
  return (
    <CategoriesProvider>
      <FilterProvider>
        <SearchProvider>
          <TagsProvider>{children}</TagsProvider>
        </SearchProvider>
      </FilterProvider>
    </CategoriesProvider>
  );
};

export default AppProvider;
