import { Modal } from "antd";
import deleteCategoryById from "./deleteCategoryById";

const deleteConfirm = (id, name, setRemoveState) => {
    Modal.confirm({
      title: '¿Estás seguro de que quieres eliminar esta categoría?',
      content: 'Esta acción no se puede deshacer.',
      okText: 'Sí',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        deleteCategoryById(id, name, setRemoveState);
      },
    });
  };
  
export default deleteConfirm;