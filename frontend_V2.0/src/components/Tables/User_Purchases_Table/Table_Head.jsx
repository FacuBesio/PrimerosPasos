import { th_style, transition_200 } from "../../../styles";

const Table_Head = () => {
  return (
    <tr className={`rounded-xl ${transition_200}`}>
      <th className={th_style}>Id</th>
      <th className={th_style}>Fecha</th>
      <th className={th_style}>Hora</th>
      <th className={th_style}>Usuario</th>
      <th className={th_style}>Email</th>
      <th className={th_style}>N° Orden</th>
      <th className={th_style}>N° Pago</th>
      <th className={th_style}>Tipo</th>
      <th className={th_style}>Estado</th>
    </tr>
  );
};

export default Table_Head;
