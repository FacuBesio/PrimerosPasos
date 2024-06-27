import { notification } from "antd";

const showDeleteNotification = (message) => {
  notification.success({
    message: "Producto eliminado",
    description: message,
  });
};

export default showDeleteNotification;
