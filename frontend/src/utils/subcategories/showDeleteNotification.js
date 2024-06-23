import { notification } from "antd";

const showDeleteNotification = (message) => {
  notification.success({
    message: "Subcategoría eliminada",
    description: message,
  });
};

export default showDeleteNotification;
