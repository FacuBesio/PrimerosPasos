import { th_style, transition_200 } from "../../../styles";

const Table_Head = () => {
  return (
    <tr className={`rounded-xl ${transition_200}`}>
      <th className={th_style}>Id</th>
      <th className={th_style}>Imagen</th>
      <th className={th_style}>Nombre</th>
      <th className={th_style}>Email</th>
      <th className={th_style}>Teléfono</th>
      <th className={th_style}>País</th>
      <th className={th_style}>Rol</th>
      <th className={th_style}>Habilitado</th>
      <th className={th_style}>Actualizar</th>
      <th className={th_style}> Eliminar </th>
    </tr>
  );
};

export default Table_Head;
