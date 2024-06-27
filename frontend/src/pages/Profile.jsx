import { Route, Routes } from "react-router-dom";
import UserProfile from "./ProfilePages/UserProfile";

const Profile = () => {
  return (
    <>
      <Routes>
        <Route path="/personalInfo" element={<UserProfile />} />
      </Routes>
    </>
  );
};

export default Profile;
