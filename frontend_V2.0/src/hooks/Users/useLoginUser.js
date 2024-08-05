import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import postUsers from "../../services/Users/postUsers";
import Order_Initializer from "../../utils/users/Order_Initializer";

const useLoginUser = () => {
  const { isAuthenticated, user } = useAuth0();
  const userData = JSON.parse(window.localStorage.getItem("userData"));
  const auth0_user = user;

  useEffect(() => {
    if (isAuthenticated && auth0_user) {
      postUsers(auth0_user).then((data) => {
        if (data.user.id) {
          const { id, enabled, role, name, email, orders } = data.user;
          const img = auth0_user.picture;
          const userData = { id, enabled, role, name, email, img };
          window.localStorage.setItem("userData", JSON.stringify(userData));
          Order_Initializer(id, orders).then();
        }
      });
    }
    if (userData?.role === "owner" || userData?.role === "admin") {
      //   setIsAdmin(true); AGREGAR EN LOGOUT setIsAdmin(false)
    }
  }, [isAuthenticated, userData]);

  return { userData };
};

export default useLoginUser;
