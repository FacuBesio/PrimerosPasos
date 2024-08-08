import React, { createContext, useState, useMemo } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const value = useMemo(() => ({ isCartOpen, setIsCartOpen }), [isCartOpen]);
  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
};
