import Table_Head from "./Table_Head";
import { transition_200 } from "../../../styles";
import useUsers from "../../../hooks/Users/useUsers";
import Table_Users_NoResult from "./Table_Users_NoResult";
import Table_Users_Iterator from "./Table_Users_Iterator";

const Users_Table = () => {
  const { allUsers, areUsersLoaded } = useUsers();

  return (
    <div className={`overflow-x-auto w-full ${transition_200}`}>
      <table className="w-full border border-collapse bg-white">
        <thead>
          <Table_Head />
        </thead>
        <tbody className="text-center ">
          {areUsersLoaded && allUsers.totalResults > 0 && (
            <Table_Users_Iterator allUsers={allUsers} />
          )}

          {areUsersLoaded && allUsers.totalResults === 0 && (
            <Table_Users_NoResult />
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Users_Table;
