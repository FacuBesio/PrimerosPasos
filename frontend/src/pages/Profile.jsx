import { Route, Routes } from "react-router-dom";
import UserProfile from "./ProfilePages/UserProfile";
import UserPurchases from "./ProfilePages/UserPurchases";
import UserProfile_update from "./ProfilePages/UserProfile_update";

const Profile = () => {
  return (
    <>
      <Routes>
        <Route path="/personalInfo" element={<UserProfile />} />
        <Route path="/personalInfo/update" element={<UserProfile_update />} />
        <Route path="/personalPurchases" element={<UserPurchases />} />
      </Routes>
    </>
  );
};

export default Profile;
