import { useState, useEffect } from "react";
import getPurchasesByUser from "../../services/Purchases/getPurchasesByUser";

const usePurchasesByUser = () => {
  const [allUserPurchases, setAllUserPurchases] = useState([]);

  let areUserPurchasesLoaded;
  allUserPurchases.hasOwnProperty("totalResults")
    ? (areUserPurchasesLoaded = true)
    : (areUserPurchasesLoaded = false);

  useEffect(() => {
    const userData = JSON.parse(window.localStorage.getItem("userData"));
    if(userData){
    getPurchasesByUser(userData.id).then((data) => setAllUserPurchases(data));
  }
  }, []);

  return { allUserPurchases, areUserPurchasesLoaded };
};

export default usePurchasesByUser;
