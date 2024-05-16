import React from 'react'

const Paginated = ({currentPage,totalPages,onPageChange}) => {

    const goToFirstPage = () => {
        onPageChange(1);
      };
    
      const goToLastPage = () => {
        onPageChange(totalPages);
      };
    
      const goToPreviousPage = () => {
        const previousPage = currentPage - 1;
        if (previousPage >= 1) {
          onPageChange(previousPage);
        }
      };
    
      const goToNextPage = () => {
        const nextPage = currentPage + 1;
        if (nextPage <= totalPages) {
          onPageChange(nextPage);
        }
      };

  return (
    <div className='flex justify-center items-center  gap-4 pb-4'>
            <button  onClick={goToFirstPage} className="border border-red-200 px-1 rounded-md ">Primera</button>
            <button  onClick={goToPreviousPage} className='border border-red-200 p-1 rounded-md'><img className='w-[24px]' src="/src/assets/leftArrow.png" alt="flecha" /></button>
            <h4>Pagina {currentPage} de {totalPages}</h4>
            <button   onClick={goToNextPage} className='border border-red-200 p-1 rounded-md'><img className='w-[24px]' src="/src/assets/rightArrow.png" alt="flecha" /></button>
            <button  onClick={goToLastPage} className='border border-red-200 px-1 rounded-md'>Última</button>
    </div>
  )
}

export default Paginated