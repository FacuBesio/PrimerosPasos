import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import postUsers from "../../services/Users/postUsers";
import order_Initializer from "../../utils/users/order_Initializer"
import getUserData from "../../utils/local_storage/getUserData";

const useLoginUser = () => {
  const { isAuthenticated, user } = useAuth0();
  const userData = getUserData();
  const auth0_user = user;

  let isUserLoaded;
  auth0_user
    ? (isUserLoaded = true)
    : (isUserLoaded = false);

  useEffect(() => {
    if (isAuthenticated && auth0_user) {
      postUsers(auth0_user).then((data) => {
        if (data.user.id) {
          const { id, enabled, role, name, email, orders } = data.user;
          const img = auth0_user.picture;
          const userData = { id, enabled, role, name, email, img };
          window.localStorage.setItem("userData", JSON.stringify(userData));
          order_Initializer(id, orders);
        }
      });
    }
    if (userData?.role === "owner" || userData?.role === "admin") {
      //   setIsAdmin(true); AGREGAR EN LOGOUT setIsAdmin(false)
    }
  }, [isAuthenticated, userData]);

  return { userData, auth0_user, isUserLoaded };
};

export default useLoginUser;
