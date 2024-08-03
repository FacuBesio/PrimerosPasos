import { filterSelectorStyle, sorterSelectorStyle } from "../../../styles";
import { useContext } from "react";
import { SortContext } from "../../../context";
import useAdminNavegation from "../../../hooks/Admin/useAdminNavegation";

function Order_Price_Selector({ handlerChange }) {
  const { sorter } = useContext(SortContext);
  const { price_selector } = sorter;
  const { adminNavegationActive } = useAdminNavegation();

  return (
    <div>
      <select
        className={
          adminNavegationActive ? filterSelectorStyle : sorterSelectorStyle
        }
        name="price_selector"
        id="price_selector"
        onChange={handlerChange}
        value={price_selector}
      >
        <option className="text-[#5a5b5a] text-[12px] md:text-[16px]" value="">
          Precio
        </option>
        <option
          className="text-[#5a5b5a] text-[12px] md:text-[16px]"
          value="asc"
        >
          Menor precio
        </option>
        <option
          className="text-[#5a5b5a] text-[12px] md:text-[16px]"
          value="desc"
        >
          Mayor precio
        </option>
      </select>
    </div>
  );
}

export default Order_Price_Selector;
