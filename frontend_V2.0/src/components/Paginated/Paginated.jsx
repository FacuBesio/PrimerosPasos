import { useContext, useEffect } from "react";
import {
  paginated_button,
  paginatedStyle,
  visible,
  invisible,
} from "../../styles";
import { PagesContext } from "../../context";
import useProducts from "../../hooks/Products/useProducts";
import {
  VerticalLeftOutlined,
  RightOutlined,
  LeftOutlined,
  VerticalRightOutlined,
} from "@ant-design/icons";

const Paginated = () => {
  const { page, setPage } = useContext(PagesContext);
  const { allProducts, areProductsLoaded } = useProducts();
  const { totalPages } = allProducts;

  const paginated_visibility = areProductsLoaded ? visible : invisible;

  const goToFirstPage = () => {
    setTimeout(() => {
      setPage(1);
    }, 50);
  };

  const goToLastPage = () => {
    setTimeout(() => {
      setPage(totalPages);
    }, 50);
  };

  const goToPreviousPage = () => {
    if (page > 1) {
      setTimeout(() => {
        setPage(page - 1);
      }, 50);
    }
  };

  const goToNextPage = () => {
    if (page < totalPages) {
      setTimeout(() => {
        setPage(page + 1);
      }, 50);
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  return (
    <div className={`${paginatedStyle} ${paginated_visibility}`}>
      <button onClick={goToFirstPage} className={paginated_button}>
        <VerticalRightOutlined />
      </button>
      <button onClick={goToPreviousPage} className={paginated_button}>
        <LeftOutlined />
      </button>
      <h4 className="text-black/25 font-semibold text-[12px] md:text-[18px]">
        {page} / {totalPages}
      </h4>
      <button onClick={goToNextPage} className={paginated_button}>
        <RightOutlined />
      </button>
      <button onClick={goToLastPage} className={paginated_button}>
        <VerticalLeftOutlined />
      </button>
    </div>
  );
};

export default Paginated;
