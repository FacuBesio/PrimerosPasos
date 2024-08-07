import { Link } from "react-router-dom";
import useLoginUser from "../../../hooks/Users/useLoginUser";
import { invisible, transition_200, visible } from "../../../styles";

const UserProfile_button = () => {
  const { isUserLoaded, auth0_user } = useLoginUser();

  const button_visibility = isUserLoaded ? visible : invisible;

  return (
    <>
      <Link to="/profile/personalInfo">
        <img
          src={auth0_user?.picture}
          alt={auth0_user?.name}
          className={`"w-8 h-8 cursor-pointer rounded-full hover:scale-95 ${transition_200} ${button_visibility}`}
        />
      </Link>
    </>
  );
};

export default UserProfile_button;
