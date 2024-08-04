import { useState, useEffect } from "react";
import getUsers from "../../services/Users/getUsers";

const useUsers = () => {
  const [allUsers, setAllUsers] = useState([]);

  let areUsersLoaded;
  allUsers.hasOwnProperty("totalResults")
    ? (areUsersLoaded = true)
    : (areUsersLoaded = false);

  useEffect(() => {
    getUsers().then((data) => setAllUsers(data));
  }, []);

  return { allUsers, areUsersLoaded };
};

export default useUsers;
