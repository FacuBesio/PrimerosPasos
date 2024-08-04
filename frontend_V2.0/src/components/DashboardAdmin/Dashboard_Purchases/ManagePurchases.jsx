import { invisible, transition_200, visible } from "../../../styles";
import useLoadEffect from "../../../hooks/Effects/useLoadEffect";
import Purchases_Table from "../../Tables/Purchases_Table/Purchases_Table";

const ManagePurchases = () => {
  const { loadEffect } = useLoadEffect();
  const users_visibility = loadEffect ? visible : invisible;

  return (
    <div
      className={`flex flex-col gap-4 min-h-screen ${transition_200} ${users_visibility} `}
    >
      <div className={`bg-slate-400 rounded-md p-3 text-center w-fit`}>
        <label
          htmlFor="purchases"
          className="text-white font-bold text-[12px] md:text-[18px]"
        >
          Compras
        </label>
      </div>

      <Purchases_Table />
    </div>
  );
};

export default ManagePurchases;
