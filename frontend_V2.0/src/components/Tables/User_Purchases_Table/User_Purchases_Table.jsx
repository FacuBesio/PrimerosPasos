import Table_Head from "./Table_Head";
import { transition_200 } from "../../../styles";
import Table_Purchases_NoResult from "./Table_Purchases_NoResult";
import Table_Purchases_Iterator from "./Table_Purchases_Iterator";
import usePurchasesByUser from "../../../hooks/Purchases/usePurchasesByUser";

const User_Purchases_Table = () => {
  const { allUserPurchases, areUserPurchasesLoaded } = usePurchasesByUser();
  
  return (
    <div className={`overflow-x-auto w-full ${transition_200}`}>
      <table className="w-full border border-collapse bg-white">
        <thead>
          <Table_Head />
        </thead>
        <tbody className="text-center">
        {areUserPurchasesLoaded && allUserPurchases.totalResults > 0 && (
            <Table_Purchases_Iterator allUserPurchases={allUserPurchases} />
          )}

          {areUserPurchasesLoaded && allUserPurchases.totalResults === 0 && (
            <Table_Purchases_NoResult />
          )}
        </tbody>
      </table>
    </div>
  );
};

export default User_Purchases_Table;
