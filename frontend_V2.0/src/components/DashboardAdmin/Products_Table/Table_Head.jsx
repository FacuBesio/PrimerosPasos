import useLoadEffect from "../../../hooks/Effects/useLoadEffect";
import { invisible, th_style, transition_200, visible } from "../../../styles";

const Table_Head = () => {
  const { loadEffect } = useLoadEffect();

  const tr_visibility = loadEffect ? visible : invisible;

  return (
    <>
      <tr className={`rounded-xl ${transition_200}`}>
        <th className={th_style}>Imagen</th>
        <th className={`${th_style} w-2/12`}>Nombre</th>
        <th className={th_style}>Marca</th>
        <th className={th_style}>Categoría</th>
        <th className={th_style}>Subcategoría</th>
        <th className={th_style}>Color</th>
        <th className={th_style}>Talle</th>
        <th className={th_style}>Precio</th>
        <th className={th_style}>Stock</th>
        <th className={th_style}>Habilitado</th>
        <th className={th_style}>Rating</th>
        <th className={th_style}>Actualizar</th>
        <th className={th_style}>Eliminar</th>
      </tr>
    </>
  );
};

export default Table_Head;
