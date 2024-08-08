import { useState, useEffect } from "react";

const useLoadEffect_300 = () => {
  const [loadEffect_300, setLoadEffect_300] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoadEffect_300(true);
    }, 200);
  }, []);

  return { loadEffect_300, setLoadEffect_300 };
};

export default useLoadEffect_300;
