import { notification } from "antd";

const CanNot_UpdateNotification = (name, message) => {
  notification.error({
    message: `No se puede actualizar usuario '${name}'`,
    description: message,
  });
};

export default CanNot_UpdateNotification;
