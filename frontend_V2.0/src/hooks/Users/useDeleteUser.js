import { useContext } from "react";
import { Modal } from "antd";
import { AdminContext } from "../../context";
import showDeleteNotification from "../../utils/users/showDeleteNotification";
import deleteUserById from "../../services/Users/deleteUserById";

const useDeleteUser = () => {
  const { setItemRemoved } = useContext(AdminContext);

  const confirmDeleteAccion = async (id, name) => {
    const response = await deleteUserById(id);
    if (response.removed) {
      setItemRemoved(true);
      showDeleteNotification(
        `El usuario '${name}' se ha eliminado correctamente.`
      );
    }
  };

  const deleteWarning = (id, name) => {
    Modal.confirm({
      title: "¿Estás seguro de que quieres eliminar este usuario?",
      content: "Esta acción no se puede deshacer.",
      okText: "Sí",
      okType: "danger",
      cancelText: "No",
      onOk() {
        confirmDeleteAccion(id, name);
      },
    });
  };

  return { deleteWarning };
};

export default useDeleteUser;
