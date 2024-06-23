import { Route, Routes } from "react-router-dom";
import ManageUsers from "./users_dashboard/ManageUser";
import UpdateUser from "./users_dashboard/UpdateUser";


//? "/manageUsers"
const UsersDashboard = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<ManageUsers />} />
        <Route path="/update/:id" element={<UpdateUser />} />
      </Routes>
    </>
  );
};

export default UsersDashboard;
