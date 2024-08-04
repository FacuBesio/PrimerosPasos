import { notification } from "antd";

const showUpdateNotification = (message) => {
  notification.success({
    message: "Usuario actualizado",
    description: message,
  });
};

export default showUpdateNotification;
