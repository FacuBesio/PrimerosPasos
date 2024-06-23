import { notification } from "antd";

const showUpdateNotification = (message) => {
  notification.success({
    message: "Subcategoría actualizada",
    description: message,
  });
};

export default showUpdateNotification;
