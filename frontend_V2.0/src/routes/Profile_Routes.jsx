import { Route, Routes } from "react-router-dom";
import PersonalInfo from "../components/Profile/PersonalInfo";
import PersonalPurchases from "../components/Profile/PersonalPurchases";
import Profile_NavAside from "../components/Profile_NavAside/Profile_NavAside";
import {
  position_down,
  invisible,
  position_up,
  profileStyle,
  visible,
} from "../styles";
import useLoadEffect_0 from "../hooks/Effects/useLoadEffect_0";
import useLoadEffect from "../hooks/Effects/useLoadEffect";
import { useContext, useEffect } from "react";
import { ShopContext } from "../context";

const Profile_Routes = () => {
  const { loadEffect } = useLoadEffect();
  const { loadEffect_0 } = useLoadEffect_0();
  const { wasShopActive, setWasShopActive } = useContext(ShopContext);

  const profile_visibility = loadEffect ? visible : invisible;
  let profile_position = "";
  wasShopActive
    ? (profile_position = loadEffect_0 ? position_up : position_down)
    : (profile_position = `${position_up} + ${profile_visibility}`);

  useEffect(() => {
    wasShopActive && loadEffect && setWasShopActive(false);
  }, [loadEffect]);

  return (
    <section className={`${profileStyle} ${profile_position}`}>
      <Profile_NavAside />

      <Routes>
        <Route path="/personalInfo" element={<PersonalInfo />} />
        <Route path="/personalPurchases" element={<PersonalPurchases />} />
      </Routes>
    </section>
  );
};

export default Profile_Routes;
