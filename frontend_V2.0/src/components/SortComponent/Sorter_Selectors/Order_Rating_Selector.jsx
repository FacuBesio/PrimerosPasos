import { filterSelectorStyle, sorterSelectorStyle } from "../../../styles";
import { useContext } from "react";
import { SortContext } from "../../../context";

function Order_Rating_Selector({ handlerChange }) {
  const { sorter } = useContext(SortContext);
  const { rating_selector } = sorter;

  return (
    <div>
      <select
        className={sorterSelectorStyle}
        name="rating_selector"
        id="rating_selector"
        onChange={handlerChange}
        value={rating_selector}
      >
        <option className="text-[#5a5b5a] text-[12px] md:text-[16px]" value="">
          Sin rating
        </option>
        <option
          className="text-[#5a5b5a] text-[12px] md:text-[16px]"
          value="asc"
        >
          Menor rating
        </option>
        <option
          className="text-[#5a5b5a] text-[12px] md:text-[16px]"
          value="desc"
        >
          Mayor rating
        </option>
      </select>
    </div>
  );
}

export default Order_Rating_Selector;