import { Link } from "react-router-dom";
import ProfileForm from "../Forms/profile/ProfileForm";
import { back_button, invisible, transition_200, visible } from "../../styles";
import useLoadEffect from "../../hooks/Effects/useLoadEffect";

const PersonalInfo = () => {
  const { loadEffect } = useLoadEffect();

  const personalInfo_visibility = loadEffect ? visible : invisible;

  return (
    <div
      className={`w-full rounded-lg flex flex-col items-center p-4 gap-4 ${transition_200} ${personalInfo_visibility}`}
    >
      <ProfileForm />

      <Link to="/" className={back_button}>
        VOLVER
      </Link>
    </div>
  );
};

export default PersonalInfo;
