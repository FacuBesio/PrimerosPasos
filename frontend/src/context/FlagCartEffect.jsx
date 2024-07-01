import React, { createContext, useState, useMemo } from "react";

export const FlagCartEffectContext = createContext();

export const FlagEffectProvider = ({ children }) => {
  const [flag, setFlag] = useState(false);

  const value = useMemo(() => ({ flag, setFlag }), [flag]);
  return (
    <FlagCartEffectContext.Provider value={value}>
      {children}
    </FlagCartEffectContext.Provider>
  );
};
