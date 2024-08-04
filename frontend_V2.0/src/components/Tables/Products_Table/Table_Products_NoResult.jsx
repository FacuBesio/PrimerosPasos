import { td_style } from "../../../styles";

const Table_Products_NoResult = () => {
  return (
    <tr className="w-full">
      <td className={`${td_style} w-full text-center py-4`} colSpan={13}>
        No se encontraron resultados para esta consulta
      </td>
    </tr>
  );
};

export default Table_Products_NoResult;
