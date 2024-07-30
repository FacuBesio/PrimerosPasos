import React, { createContext, useState, useMemo } from "react";

export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [productRemoved, setProductRemoved] = useState(false);
  
  const value = useMemo(
    () => ({ productRemoved, setProductRemoved }),
    [productRemoved]
  );
  return (
    <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
  );
};
