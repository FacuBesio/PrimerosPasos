import { Route, Routes } from "react-router-dom";
import UserProfile from "./ProfilePages/UserProfile";
import UserPurchases from "./ProfilePages/UserPurchases";

const Profile = () => {
  return (
    <>
      <Routes>
        <Route path="/personalInfo" element={<UserProfile />} />
        <Route path="/personalPurchases" element={<UserPurchases />} />
      </Routes>
    </>
  );
};

export default Profile;
