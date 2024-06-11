import { useState, useEffect } from "react";

const useLoading = (delay = 250) => {
  const [loading, setLoading] = useState(true);
  const [delayLoading, setDelayLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelayLoading(false);
    }, delay);
    return () => clearTimeout(timer);
  }, [loading, delay]);

  return { loading, delayLoading };
};

export default useLoading;
