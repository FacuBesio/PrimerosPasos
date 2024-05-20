const userDataInitializer =  () => {
 const userData = JSON.parse(window.localStorage.getItem("userData"));
!userData && window.localStorage.setItem("userData", JSON.stringify({}));
};

export default userDataInitializer;
