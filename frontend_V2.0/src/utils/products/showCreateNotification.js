import { notification } from "antd";

const showCreateNotification = (message) => {
  notification.success({
    message: "Producto creado",
    description: message,
  });
};

export default showCreateNotification;
