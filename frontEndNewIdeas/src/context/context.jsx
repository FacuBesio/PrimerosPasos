import React from "react";
import { BrandsProvider } from "./BrandsContext";
import { CategoriesProvider } from "./CategoriesContext";
import { FilterProvider } from "./FilterContext";
import { PagesProvider } from "./PagesContext";
import { ProductsProvider } from "./ProductsContext";
import { SearchProvider } from "./SearchContext";
import { SortProvider } from "./SortContext";


const AppProvider = ({ children }) => {
  return (
    <BrandsProvider>
      <CategoriesProvider>
        <FilterProvider>
          <PagesProvider>
            <ProductsProvider>
              <SearchProvider>
                <SortProvider>
                  {children}
                </SortProvider>
              </SearchProvider>
            </ProductsProvider>
          </PagesProvider>
        </FilterProvider>
      </CategoriesProvider>
    </BrandsProvider>
  );
};

export default AppProvider;
