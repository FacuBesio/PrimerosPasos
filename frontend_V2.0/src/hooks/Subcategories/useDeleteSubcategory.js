import { useContext } from "react";
import { Modal } from "antd";
import { AdminContext } from "../../context";
import showDeleteNotification from "../../utils/subcategories/showDeleteNotification";
import deleteSubcategoryById from "../../services/Subcategories/deleteSubcategoryById";

const useDeleteSubcategory = () => {
  const { setItemRemoved } = useContext(AdminContext);

  const confirmDeleteAccion = async (id, name) => {
    const response = await deleteSubcategoryById(id);
    if (response.removed) {
      setItemRemoved(true);
      showDeleteNotification(
        `La subcategoría '${name}' se ha eliminado correctamente.`
      );
    }
  };

  const deleteWarning = (id, name) => {
    Modal.confirm({
      title: "¿Estás seguro de que quieres eliminar esta subcategoría?",
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

export default useDeleteSubcategory;
