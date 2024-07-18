import { useState, useEffect } from "react";

const useLoadEffect = () => {
  const [loadEffect, setLoadEffect] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoadEffect(true);
    }, 150);
  }, []);

  return { loadEffect };
};

export default useLoadEffect;
