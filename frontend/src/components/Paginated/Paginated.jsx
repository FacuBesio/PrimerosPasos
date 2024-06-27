/* eslint-disable react/prop-types */

import { paginatedButton, paginatedButtonLetters } from "../../styles";

const Paginated = ({ page, setPage, totalPages }) => {
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
      setPage(previousPage);
    }
  };

  const goToNextPage = () => {
    const nextPage = page + 1;
    if (page === totalPages) {
      console.log("nose puede seguir avanzando");
    } else {
      setPage(nextPage);
    }
  };

  return (
    <div className="flex justify-center items-center  gap-2 pt-2 pb-4 px-4">
      <button
        onClick={goToFirstPage}
        className={paginatedButtonLetters}
      >
        Primera
      </button>
      <button onClick={goToPreviousPage} className={paginatedButton}>
        <img
          className="w-[24px]"
          src="/src/assets/leftArrow.png"
          alt="flecha"
        />
      </button>
      <h4 className="text-[#5a5b5a] text-[12px] md:text-[18px]">
        Pag {page} de {totalPages}
      </h4>
      <button onClick={goToNextPage} className={paginatedButton}>
        <img
          className="w-[24px]"
          src="/src/assets/rightArrow.png"
          alt="flecha"
        />
      </button>
      <button
        onClick={goToLastPage}
        className={paginatedButtonLetters}
      >
        Última
      </button>
    </div>
  );
};

export default Paginated;
