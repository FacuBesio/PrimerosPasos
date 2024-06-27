import { notification } from "antd";

const showUpdateNotification = (message) => {
  notification.success({
    message: "Categoría actualizada",
    description: message,
  });
};

export default showUpdateNotification;
