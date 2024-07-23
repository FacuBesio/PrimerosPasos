import { useContext } from "react";
import leftArrowIcon from "../../assets/LeftArrow.png";
import rightArrowIcon from "../../assets/rightArrow.png";
import {
  paginated_invisible,
  paginated_visible,
  next_or_previous_button,
  firts_or_last_page_button,
  paginatedStyle,
} from "../../styles";
import { PagesContext } from "../../context";
import useProducts from "../../hooks/Products/useProducts";

const Paginated = () => {
  const { page, setPage } = useContext(PagesContext);
  const { allProducts, areProductsLoaded } = useProducts();
  const { totalPages } = allProducts;

  const paginated_visibility = areProductsLoaded
    ? paginated_visible
    : paginated_invisible;

  const goToFirstPage = () => {
    setPage(1);
  };

  const goToLastPage = () => {
    setPage(totalPages);
  };

  const goToPreviousPage = () => {
    const previousPage = page - 1;
    if (page === 1) {
      console.log("no se puede seguir bajando");
    } else {
      setTimeout(() => {
      setPage(previousPage);
    }, 150);
    }
  };

  const goToNextPage = () => {
    const nextPage = page + 1;
    if (page === totalPages) {
      console.log("nose puede seguir avanzando");
    } else {
      setTimeout(() => {
      setPage(nextPage);
    }, 150);
    }
  };

  return (
    <div className={`${paginatedStyle} ${paginated_visibility}`}>
      <button onClick={goToFirstPage} className={firts_or_last_page_button}>
        ◄◄
      </button>
      <button onClick={goToPreviousPage} className={next_or_previous_button}>
        ◄
      </button>
      <h4 className="text-black/25 font-semibold text-[12px] md:text-[18px]">
        {page} / {totalPages}
      </h4>
      <button onClick={goToNextPage} className={next_or_previous_button}>
        ►
      </button>
      <button onClick={goToLastPage} className={firts_or_last_page_button}>
        ►►
      </button>
    </div>
  );
};

export default Paginated;
