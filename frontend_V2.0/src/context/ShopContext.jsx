import React, { createContext, useMemo, useState } from "react";

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [wasShopActive, setWasShopActive] = useState(false);
  const value = useMemo(
    () => ({ wasShopActive, setWasShopActive }),
    [wasShopActive]
  );

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
