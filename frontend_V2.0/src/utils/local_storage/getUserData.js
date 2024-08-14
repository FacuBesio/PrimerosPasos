const getUserData = () => {
  const userData = window.localStorage.getItem("userData");
  return userData ? JSON.parse(userData) : null;
};

export default getUserData;
