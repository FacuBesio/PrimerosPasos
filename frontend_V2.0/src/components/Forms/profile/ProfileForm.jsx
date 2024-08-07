import useUpdateProfile from "../../../hooks/Profile/useUpdateProfile";
import putUsers_Profile from "../../../services/Users/putUsers_Profile";
import showUpdateNotification from "../../../utils/profile/showUpdateNotification";
import Profile_Inputs from "./Profile_Inputs";
import Update_button from "./Update_button";

const ProfileForm = () => {
  const {
    userProfile,
    setUserProfile,
    editable,
    setEditable,
    disabled,
    errors,
  } = useUpdateProfile();

  const handlerChange = (event) => {
    const property = event.target.name;
    let value = event.target.value;
    setUserProfile({ ...userProfile, [property]: value });
  };

  const handlerSubmit = async (event) => {
    event.preventDefault();
    const response = await putUsers_Profile(userProfile);
    if (response.updated) {
      const userDataStorage = JSON.parse(window.localStorage.getItem("userData"));
      const { id, enabled, role, name, email } = response.user;
      const img = userDataStorage ? userDataStorage.img : null;
      const userData = { id, enabled, role, name, email, img };
      window.localStorage.setItem("userData", JSON.stringify(userData));
      window.scrollTo({ top: 0, behavior: "smooth" });
      showUpdateNotification(`Tus datos fueron actualizados exitosamente.`);
    }
    setEditable(false);
  };

  return (
    <form
      className=" bg-gray-600 bg-opacity-75 p-4 rounded-lg flex flex-col items-center w-1/2"
      onSubmit={handlerSubmit}
    >
      <h1 className="text-white font-bold py-2 rounded-md text-[18px] md:text-[22px]">
        DATOS PERSONALES
      </h1>

      <Profile_Inputs
        userProfile={userProfile}
        handlerChange={handlerChange}
        editable={editable}
        errors={errors}
      />

      <Update_button editable={editable} setEditable={setEditable} disabled={disabled} />
    </form>
  );
};

export default ProfileForm;
