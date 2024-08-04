import { useEffect, useState } from "react";
import getUserById from "../../services/Users/getUserById";
import CanNot_UpdateNotification from "../../utils/users/CanNot_UpdateNotification";
import { useNavigate } from "react-router-dom";
import isPrimaryOwner from "../../utils/users/isPrimaryOwner";

const useUpdateUser = (id) => {
  const navigate = useNavigate();
  const [updateUser, setUpdateUser] = useState({});

  let isUserLoaded;
  updateUser.hasOwnProperty("id")
    ? (isUserLoaded = true)
    : (isUserLoaded = false);

  useEffect(() => {
    getUserById(id).then((data) => {
      const { user } = data;
      const { owner_result } = isPrimaryOwner(user);
      if (owner_result) {
        CanNot_UpdateNotification(
          user.name,
          `Los datos del owner no pueden ser modificados por este medio.`
        );
        navigate("/admin/manageUsers/");
      } else {
        setTimeout(() => {
          setUpdateUser(user);
          window.scrollTo(0, 0);
        }, 200);
      }
    });
  }, [id]);

  return {
    updateUser,
    setUpdateUser,
    isUserLoaded,
  };
};

export default useUpdateUser;
