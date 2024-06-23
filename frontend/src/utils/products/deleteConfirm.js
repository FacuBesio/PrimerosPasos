import { Modal } from "antd";
import deleteProductById from "./deleteProductById";

const deleteConfirm = (id, name, setRemoveState) => {
    Modal.confirm({
      title: '¿Estás seguro de que quieres eliminar este producto?',
      content: 'Esta acción no se puede deshacer.',
      okText: 'Sí',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        deleteProductById(id, name, setRemoveState);
      },
    });
  };
  
export default deleteConfirm;