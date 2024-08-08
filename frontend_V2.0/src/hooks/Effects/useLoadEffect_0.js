import { useState, useEffect } from "react";

const useLoadEffect_0 = () => {
  const [loadEffect_0, setLoadEffect_0] = useState(false);

  useEffect(() => {
    setLoadEffect_0(true);
  }, []);

  return { loadEffect_0, setLoadEffect_0 };
};

export default useLoadEffect_0;
