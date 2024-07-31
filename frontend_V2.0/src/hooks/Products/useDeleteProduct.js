import { useContext } from "react";
import { Modal } from "antd";
import { AdminContext } from "../../context";
import deleteProductById from "../../services/Products/deleteProductById";
import showDeleteNotification from "../../utils/products/showDeleteNotification";

const useDeleteProduct = () => {
  const { setItemRemoved } = useContext(AdminContext);

  const confirmDeleteAccion = async (id, name) => {
    const response = await deleteProductById(id);
    if (response.removed) {
      setItemRemoved(true);
      showDeleteNotification(
        `El producto '${name}' se ha eliminado correctamente.`
      );
    }
  };

  const deleteWarning = (id, name) => {
    Modal.confirm({
      title: "¿Estás seguro de que quieres eliminar este producto?",
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

export default useDeleteProduct;
