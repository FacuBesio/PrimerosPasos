import City_input from "./InputsForm/City_input";
import CountryAndState_input from "./InputsForm/CountryAndState_input";
import NameAndEmail_input from "./InputsForm/NameAndEmail_input";
import Phone_input from "./InputsForm/Phone_input";
import Street_input from "./InputsForm/Street_input";

const Profile_Inputs = ({ userProfile, handlerChange, errors, editable }) => {


  return (
    <div className="w-full flex flex-col items-center">
      <NameAndEmail_input
        handlerChange={handlerChange}
        errors={errors}
        userProfile={userProfile}
        editable={editable}
      />
      <CountryAndState_input
        handlerChange={handlerChange}
        errors={errors}
        userProfile={userProfile}
        editable={editable}
      />
      <City_input
        handlerChange={handlerChange}
        errors={errors}
        userProfile={userProfile}
        editable={editable}
      />
      <Street_input
        handlerChange={handlerChange}
        errors={errors}
        userProfile={userProfile}
        editable={editable}
      />
      <Phone_input
        handlerChange={handlerChange}
        errors={errors}
        userProfile={userProfile}
        editable={editable}
      />
    </div>
  );
};

export default Profile_Inputs;
