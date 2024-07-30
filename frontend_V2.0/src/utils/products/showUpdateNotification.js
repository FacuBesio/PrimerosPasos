import { notification } from "antd";

const showUpdateNotification = (message) => {
  notification.success({
    message: "Producto actualizado",
    description: message,
  });
};

export default showUpdateNotification;
