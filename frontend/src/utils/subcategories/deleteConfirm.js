import { Modal } from "antd";
import deleteSubCategoryById from "./deleteSubCategoryById";

const deleteConfirm = (id, name, setRemoveState) => {
  Modal.confirm({
    title: "¿Estás seguro de que quieres eliminar esta subcategoría?",
    content: "Esta acción no se puede deshacer.",
    okText: "Sí",
    okType: "danger",
    cancelText: "No",
    onOk() {
      deleteSubCategoryById(id, name, setRemoveState);
    },
  });
};

export default deleteConfirm;
