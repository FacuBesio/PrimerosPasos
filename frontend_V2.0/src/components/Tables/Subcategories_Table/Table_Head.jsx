import { th_style, transition_200 } from "../../../styles";

const Table_Head = () => {
  return (
    <>
      <tr className={`rounded-xl ${transition_200}`}>
        <th className={th_style}>Id</th>
        <th className={th_style}>Nombre</th>
        <th className={th_style}>Categoría</th>
        <th className={th_style}>Productos</th>
        <th className={th_style}>Habilitada</th>
        <th className={th_style}>Actualizar</th>
        <th className={th_style}>Eliminar</th>
      </tr>
    </>
  );
};

export default Table_Head;
