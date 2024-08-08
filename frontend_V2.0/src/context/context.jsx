import { AdminProvider } from "./AdminContext";
import { CartProvider } from "./CartContext";
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
      <CartProvider>
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
      </CartProvider>
    </AdminProvider>
  );
};

export default AppProvider;
