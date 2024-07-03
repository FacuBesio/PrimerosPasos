import React, { createContext, useState, useMemo } from "react";

export const FlagCartEffectContext = createContext();

export const FlagEffectProvider = ({ children }) => {
  const [flag, setFlag] = useState(false);
  const [flagFilter, setFlagFilter] = useState(false);

  const value = useMemo(
    () => ({ flag, setFlag,flagFilter, setFlagFilter  }),
   

    [flag,flagFilter]
  );
  return (
    <FlagCartEffectContext.Provider value={value}>
      {children}
    </FlagCartEffectContext.Provider>
  );
};
