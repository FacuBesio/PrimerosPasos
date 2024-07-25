import { useState, useEffect } from "react";

const useLoadEffect = () => {
  const [loadEffect, setLoadEffect] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoadEffect(true);
    }, 200);
  }, []);

  return { loadEffect };
};

export default useLoadEffect;
