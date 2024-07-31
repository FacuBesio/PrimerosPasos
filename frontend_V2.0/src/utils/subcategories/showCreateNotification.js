import { notification } from "antd";

const showCreateNotification = (message) => {
  notification.success({
    message: "Subcategoría creada",
    description: message,
  });
};

export default showCreateNotification;
