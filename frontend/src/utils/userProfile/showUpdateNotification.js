import { notification } from "antd";

const showUpdateNotification = (message) => {
  notification.success({
    message: "Perfil actualizado",
    description: message,
  });
};

export default showUpdateNotification;
