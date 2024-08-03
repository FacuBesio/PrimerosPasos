import { useLocation } from "react-router-dom";

const useAdminNavegation = () => {
  const location = useLocation();
  let adminNavegationActive = false;
  if (location.pathname.includes("admin")) {
    adminNavegationActive = true;
  }

  return { adminNavegationActive };
};

export default useAdminNavegation;
