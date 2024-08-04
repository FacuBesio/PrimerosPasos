import { useContext, useState } from "react";
import { RightCircleOutlined } from "@ant-design/icons";
import { filterInputsStyle_dashboard } from "../../../../styles";
import { FilterContext, TagsContext } from "../../../../context";

function Price_Inputs() {
  const { filter, setFilter } = useContext(FilterContext);
  const { setFilterTags} = useContext(TagsContext);
  const [pricesInputs, setPricesInputs] = useState([0, 0]);

  const handlerMinPrice = (event) => {
    const value = event.target.value === "" ? 0 : event.target.value;
    const arrayPrices = [value, pricesInputs[1]];
    setPricesInputs(arrayPrices);
  };

  const handlerMaxPrice = (event) => {
    const value = event.target.value === "" ? 0 : event.target.value;
    const arrayPrices = [pricesInputs[0], value];
    setPricesInputs(arrayPrices);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFilter({ ...filter, price_inputs: pricesInputs });
    setTimeout(() => {
      setFilterTags({ ...filter, price_inputs: pricesInputs });
    }, [150]);
  };

  return (
    <form
      className="flex items-center justify-center gap-2"
      onSubmit={handleSubmit}
    >
      <input
        className={filterInputsStyle_dashboard}
        type="number"
        placeholder="$ mín"
        onChange={handlerMinPrice}
      />

      <input
        className={filterInputsStyle_dashboard}
        type="number"
        placeholder="$ máx"
        onChange={handlerMaxPrice}
      />
      <div className="flex items-center">
        <button type="submit">
          <RightCircleOutlined className="text-xl rounded-full bg-white transition-transform duration-300 hover:scale-95" />
        </button>
      </div>
    </form>
  );
}

export default Price_Inputs;
