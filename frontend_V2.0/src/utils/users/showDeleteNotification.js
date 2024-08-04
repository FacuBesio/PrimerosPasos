import { notification } from "antd";

const showDeleteNotification = (message) => {
  notification.success({
    message: "Usuario eliminado",
    description: message,
  });
};

export default showDeleteNotification;
