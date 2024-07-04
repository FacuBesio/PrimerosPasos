/* eslint-disable react/prop-types */
import { useCallback, useContext, useEffect } from "react";
import { filterStyles } from "../../styles.js";
import { SortContext } from "../../context/index.js";
import sorterValidator from "../../utils/sorter/sorterValidator.js";

const SortComponent_Dashboard = () => {
  const {
    setSorter,
    sorterByPrice,
    setSorterByPrice,
    sorterByRating,
    setSorterByRating,
  } = useContext(SortContext);

  const onChangeSorterPrice = useCallback(
    (event) => {
      setSorterByPrice(event.target.value);
    },
    [setSorterByPrice]
  );

  const onChangeSorterRating = useCallback(
    (event) => {
      setSorterByRating(event.target.value);
    },
    [setSorterByRating]
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    const sorterQuery = sorterValidator(sorterByPrice, sorterByRating);
    if (sorterQuery.sorterActive) {
      setSorter(sorterQuery.result);
    }
  }, [sorterByPrice, sorterByRating, setSorter]);

  // useEffect(() => {}, [
  //   sorterByPrice,
  //   onChangeSorterPrice,
  //   sorterByRating,
  //   onChangeSorterRating,
  // ]);

  return (
    <div className="sort-section flex  gap-2  justify-end ">
      <div className="category-section flex gap-4 items-center">
        <div>
          <select
            className={filterStyles}
            name="sorterByPrice"
            id="sorterByPrice"
            onChange={onChangeSorterPrice}
            value={sorterByPrice}
          >
            <option className="text-[#5a5b5a] text-[12px] md:text-[18px]" value="">
              Precio
            </option>
            <option className="text-[#5a5b5a] text-[12px] md:text-[18px]" value="asc">
              Menor precio
            </option>
            <option className="text-[#5a5b5a] text-[12px] md:text-[18px]" value="desc">
              Mayor precio
            </option>
          </select>
        </div>
        <div>
          <select
            className={filterStyles}
            name="sorterByRating"
            id="sorterByRating"
            onChange={onChangeSorterRating}
            value={sorterByRating}
          >
            <option className="text-[#5a5b5a] text-[12px] md:text-[18px]" value="">
              Sin rating
            </option>
            <option className="text-[#5a5b5a] text-[12px] md:text-[18px]" value="asc">
              Menor rating
            </option>
            <option className="text-[#5a5b5a] text-[12px] md:text-[18px]" value="desc">
              Mayor rating
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SortComponent_Dashboard;
