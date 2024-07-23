import { CategoriesProvider } from "./CategoriesContext";
import { FilterProvider } from "./FilterContext";
import { PagesProvider } from "./PagesContext";
import { SearchProvider } from "./SearchContext";
import { ShopProvider } from "./ShopContext";
import { TagsProvider } from "./TagsContext";

const AppProvider = ({ children }) => {
  return (
    <CategoriesProvider>
      <FilterProvider>
        <PagesProvider>
          <SearchProvider>
            <ShopProvider>
              <TagsProvider>{children}</TagsProvider>
            </ShopProvider>
          </SearchProvider>
        </PagesProvider>
      </FilterProvider>
    </CategoriesProvider>
  );
};

export default AppProvider;
