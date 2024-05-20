import postUsers from "../users/postUsers";

const newUserdata = async (setUserData, user) => {
    const loginUser = await postUsers(user);
    setUserData(loginUser);
};

export default newUserdata;
