import { th_style, transition_200 } from "../../../styles";

const Table_Head = () => {
  return (
<tr className={`rounded-xl ${transition_200}`}>
      <th className={`${th_style} w-28`}>Imagen</th>
      <th className={`${th_style} w-52`}>Nombre</th>
      <th className={`${th_style} w-32`}>Marca</th>
      <th className={`${th_style} w-32`}>Categoría</th>
      <th className={`${th_style} w-36`}>Subcategoría</th>
      <th className={`${th_style} w-24`}>Color</th>
      <th className={`${th_style} w-24`}>Talle</th>
      <th className={`${th_style} w-28`}>Precio</th>
      <th className={`${th_style} w-24`}>Stock</th>
      <th className={`${th_style} w-28`}>Habilitado</th>
      <th className={`${th_style} w-24`}>Rating</th>
      <th className={`${th_style} w-32`}>Actualizar</th>
      <th className={`${th_style} w-32`}>Eliminar</th>
    </tr>
  );
};

export default Table_Head;
