import { notification } from "antd";

const CanNot_DeleteNotification = (name, message) => {
  notification.error({
    message: `No se puede eliminar la categoría '${name}'`,
    description: message,
  });
};

export default CanNot_DeleteNotification;
