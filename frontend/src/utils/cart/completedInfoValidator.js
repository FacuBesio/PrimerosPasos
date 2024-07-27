function completedInfoValidator(user) {
  let isComplete = true;

  if (user.name === "" || user.name === null) {
    isComplete = false;
  }

  if (user.email === "" || user.email === null) {
    isComplete = false;
  }

  if (user.country === "" || user.country === null) {
    isComplete = false;
  }

  if (user.state === "" || user.state === null) {
    isComplete = false;
  }

  if (user.city === "" || user.city === null) {
    isComplete = false;
  }

  if (user.ZIP_Code === "" || user.ZIP_Code === null) {
    isComplete = false;
  }

  if (user.street_address === "" || user.street_address === null) {
    isComplete = false;
  }

  if (user.street_number === "" || user.street_number === null) {
    isComplete = false;
  }

  if (user.phone === "" || user.phone === null) {
    isComplete = false;
  }

  console.log("isComplete: ", isComplete);

return isComplete;
}

export default completedInfoValidator;
