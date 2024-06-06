import React, { createContext, useState, useMemo } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartNumber, setCartNumber] = useState(0);
  const value = useMemo(() => ({ cartNumber, setCartNumber }), [cartNumber]);
  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
};
