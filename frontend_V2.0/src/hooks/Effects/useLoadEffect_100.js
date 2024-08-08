import { useState, useEffect } from "react";

const useLoadEffect_100 = () => {
  const [loadEffect_100, setLoadEffect_100] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoadEffect_100(true);
    }, 100);
  }, []);

  return { loadEffect_100, setLoadEffect_100 };
};

export default useLoadEffect_100;
