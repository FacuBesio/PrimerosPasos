import { useState, useEffect } from "react";
import getPurchases from "../../services/Purchases/getPurchases";

const usePurchases = () => {
  const [allPurchases, setAllPurchases] = useState([]);

  let arePurchasesLoaded;
  allPurchases.hasOwnProperty("totalResults")
    ? (arePurchasesLoaded = true)
    : (arePurchasesLoaded = false);

  useEffect(() => {
    getPurchases().then((data) => setAllPurchases(data));
  }, []);

  return { allPurchases, arePurchasesLoaded };
};

export default usePurchases;
