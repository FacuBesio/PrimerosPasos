import { CategoriesProvider } from "./CategoriesContext";
import { FilterProvider } from "./FilterContext";
import { SearchProvider } from "./SearchContext";

const AppProvider = ({ children }) => {
  return  <CategoriesProvider>
            <FilterProvider>
              <SearchProvider>
                {children}
              </SearchProvider>
            </FilterProvider>
          </CategoriesProvider>;
};

export default AppProvider;
