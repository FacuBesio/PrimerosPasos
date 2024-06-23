import { notification } from "antd";

const showCreateNotification = (message) => {
  notification.success({
    message: "Categoría creada",
    description: message,
  });
};

export default showCreateNotification;
