import { notification } from "antd";

const showDeleteNotification = (message) => {
  notification.success({
    message: "Categoría eliminada",
    description: message,
  });
};

export default showDeleteNotification;
