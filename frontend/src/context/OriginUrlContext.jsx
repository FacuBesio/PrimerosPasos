import { createContext, useState, useMemo } from "react";

export const OriginUrlContext = createContext();

export const OriginUrlProvider = ({ children }) => {
  const [originUrl, setOriginUrl] = useState("");
  const value = useMemo(() => ({ originUrl, setOriginUrl }), [originUrl]);
  return (
    <OriginUrlContext.Provider value={value}>{children}</OriginUrlContext.Provider>
  );
};
