import React from "react";
import { BrandsProvider } from "./BrandsContext";
import { CartProvider } from "./CartContext";
import { CategoriesProvider } from "./CategoriesContext";
import { FilterProvider } from "./FilterContext";
import { PagesProvider } from "./PagesContext";
import { ProductsProvider } from "./ProductsContext";
import { SearchProvider } from "./SearchContext";
import { SortProvider } from "./SortContext";
import { FlagEffectProvider } from "./FlagCartEffect";

const AppProvider = ({ children }) => {
  return (
    <BrandsProvider>
      <CartProvider>
        <CategoriesProvider>
          <FilterProvider>
            <FlagEffectProvider>
              <PagesProvider>
                <ProductsProvider>
                  <SearchProvider>
                    <SortProvider>{children}</SortProvider>
                  </SearchProvider>
                </ProductsProvider>
              </PagesProvider>
            </FlagEffectProvider>
          </FilterProvider>
        </CategoriesProvider>
      </CartProvider>
    </BrandsProvider>
  );
};

export default AppProvider;
