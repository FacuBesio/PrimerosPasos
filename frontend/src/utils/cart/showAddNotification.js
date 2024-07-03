import { notification } from "antd";

const showAddNotification = (message) => {
  notification.success({
    message: "Agregado al Carrito",
    description: message,
  });
};

export default showAddNotification;
