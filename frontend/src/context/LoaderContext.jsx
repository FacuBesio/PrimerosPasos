import React, { createContext, useState, useMemo } from "react";

export const LoaderContext = createContext();

export const LoaderProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [delayLoading, setDelayLoading] = useState(true);
  const value = useMemo(
    () => ({ loading, setLoading, delayLoading, setDelayLoading }),
    [loading]
  );
  return (
    <LoaderContext.Provider value={value}>{children}</LoaderContext.Provider>
  );
};
