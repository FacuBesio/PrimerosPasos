import { Link } from "react-router-dom";
import { back_button, invisible, transition_200, visible } from "../../styles";
import User_Purchases_Table from "../Tables/User_Purchases_Table/User_Purchases_Table";
import useLoadEffect from "../../hooks/Effects/useLoadEffect";

const PersonalPurchases = () => {
  const { loadEffect } = useLoadEffect();

  const personalPurchases_visibility = loadEffect ? visible : invisible;
  
  return (
    <div
      className={`w-full rounded-lg flex flex-col items-center p-4 gap-4 ${transition_200} ${personalPurchases_visibility}`}
    >
      <User_Purchases_Table />

      <Link to="/" className={back_button}>
        VOLVER
      </Link>
    </div>
  );
};

export default PersonalPurchases;
