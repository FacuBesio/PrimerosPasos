import React from "react";
import { BrandsProvider } from "./BrandsContext";
import { CartProvider } from "./CartContext";
import { CategoriesProvider } from "./CategoriesContext";
import { ColorsProvider } from "./ColorsContext";
import { FilterProvider } from "./FilterContext";
import { FlagEffectProvider } from "./FlagCartEffect";
import { OriginUrlProvider } from "./OriginUrlContext";
import { PagesProvider } from "./PagesContext";
import { ProductsProvider } from "./ProductsContext";
import { SearchProvider } from "./SearchContext";
import { SizesProvider } from "./SizesContext";
import { SortProvider } from "./SortContext";

const AppProvider = ({ children }) => {
  return (
    <BrandsProvider>
      <CartProvider>
        <CategoriesProvider>
          <ColorsProvider>
            <FilterProvider>
              <FlagEffectProvider>
                <OriginUrlProvider>
                  <PagesProvider>
                    <ProductsProvider>
                      <SearchProvider>
                      <SizesProvider>
                        <SortProvider>{children}</SortProvider>
                      </SizesProvider>
                      </SearchProvider>
                    </ProductsProvider>
                  </PagesProvider>
                </OriginUrlProvider>
              </FlagEffectProvider>
            </FilterProvider>
          </ColorsProvider>
        </CategoriesProvider>
      </CartProvider>
    </BrandsProvider>
  );
};

export default AppProvider;
