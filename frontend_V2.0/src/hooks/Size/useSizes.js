import { useState, useEffect } from "react";
import getSizes from "../../services/Sizes/getSizes";

const useSizes = () => {
  const [allSizes, setAllSizes] = useState([]);

  useEffect(() => {
    getSizes().then((data) => setAllSizes(data));
  }, []);

  return { allSizes };
};

export default useSizes;
