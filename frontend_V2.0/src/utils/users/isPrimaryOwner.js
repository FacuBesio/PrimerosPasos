import { OWNER_EMAIL, OWNER_NAME } from "../../config/config";

const isPrimaryOwner = (user) => {
  return {
    owner_result:
      user.email === OWNER_EMAIL && user.name === OWNER_NAME,
  };
};

export default isPrimaryOwner;
