import React, { createContext, useState, useMemo } from "react";

export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [itemRemoved, setItemRemoved] = useState(false);
  
  const value = useMemo(
    () => ({ itemRemoved, setItemRemoved }),
    [itemRemoved]
  );
  return (
    <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
  );
};
