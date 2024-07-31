import { useContext } from "react";
import { Modal } from "antd";
import { AdminContext } from "../../context";
import deleteCategoryById from "../../services/Categories/deleteCategoryById";
import showDeleteNotification from "../../utils/categories/showDeleteNotification"

const useDeleteCategory = () => {
  const { setItemRemoved } = useContext(AdminContext);

  const confirmDeleteAccion = async (id, name) => {
    const response = await deleteCategoryById(id);
    if (response.removed) {
      setItemRemoved(true);
      showDeleteNotification(
        `La categoría '${name}' se ha eliminado correctamente.`
      );
    }
  };

  const deleteWarning = (id, name) => {
    Modal.confirm({
      title: "¿Estás seguro de que quieres eliminar esta categoría?",
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

export default useDeleteCategory;
