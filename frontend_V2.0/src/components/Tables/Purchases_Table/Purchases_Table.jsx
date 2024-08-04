import Table_Head from "./Table_Head";
import { transition_200 } from "../../../styles";
import usePurchases from "../../../hooks/Purchases/usePurchases";
import Table_Purchases_NoResult from "./Table_Purchases_NoResult";
import Table_Purchases_Iterator from "./Table_Purchases_Iterator";

const Purchases_Table = () => {
  const { allPurchases, arePurchasesLoaded } = usePurchases();

  return (
    <div className={`overflow-x-auto w-full ${transition_200}`}>
      <table className="w-full border border-collapse bg-white">
        <thead>
          <Table_Head />
        </thead>
        <tbody className="text-center">
        {arePurchasesLoaded && allPurchases.totalResults > 0 && (
            <Table_Purchases_Iterator allPurchases={allPurchases} />
          )}

          {arePurchasesLoaded && allPurchases.totalResults === 0 && (
            <Table_Purchases_NoResult />
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Purchases_Table;
