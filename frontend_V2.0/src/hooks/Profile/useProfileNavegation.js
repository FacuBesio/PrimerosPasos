import { useLocation } from "react-router-dom";

const useProfileNavegation = () => {
  const location = useLocation();

  let profileNavegationActive = false;
  if (location.pathname.includes("profile")) {
    profileNavegationActive = true;
  }

  let width_form = "w-full";
  if (location.pathname.includes("profile")) {
    width_form = "w-1/2";
  }

  let padding_form = "p-2";
  if (location.pathname.includes("profile")) {
    padding_form = "p-4";
  }

  return { width_form, padding_form, profileNavegationActive };
};

export default useProfileNavegation;
