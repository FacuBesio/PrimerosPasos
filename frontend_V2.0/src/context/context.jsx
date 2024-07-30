import { AdminProvider } from "./AdminContext";
import { CategoriesProvider } from "./CategoriesContext";
import { FilterProvider } from "./FilterContext";
import { PagesProvider } from "./PagesContext";
import { SearchProvider } from "./SearchContext";
import { ShopProvider } from "./ShopContext";
import { SortProvider } from "./SortContext";
import { TagsProvider } from "./TagsContext";

const AppProvider = ({ children }) => {
  return (
    <AdminProvider>
      <CategoriesProvider>
        <FilterProvider>
          <PagesProvider>
            <SearchProvider>
              <ShopProvider>
                <SortProvider>
                  <TagsProvider>{children}</TagsProvider>
                </SortProvider>
              </ShopProvider>
            </SearchProvider>
          </PagesProvider>
        </FilterProvider>
      </CategoriesProvider>
    </AdminProvider>
  );
};

export default AppProvider;