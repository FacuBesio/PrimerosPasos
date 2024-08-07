import { NavLink } from "react-router-dom";
import adminIcon from "../../../assets/adminIcon.png";
import { invisible, transition_200, visible } from "../../../styles";
import useLoginUser from "../../../hooks/Users/useLoginUser";

const Admin_button = () => {
  const { isUserLoaded } = useLoginUser();

  const button_visibility = isUserLoaded ? visible : invisible;

  return (
    <NavLink to="/admin/manageProducts">
    <img
      src={adminIcon}
      alt="Admin Icon"
      className={`w-9 h-9 cursor-pointer my-1 rounded-full hover:scale-95 ${transition_200} ${button_visibility}`}
    />
  </NavLink>
  );
};

export default Admin_button;
