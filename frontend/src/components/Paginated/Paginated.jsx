import React from 'react'

const Paginated = ({page,setPage, totalPages}) => {



    const goToFirstPage = () => {
        setPage(1)
      };
    
      const goToLastPage = () => {
       setPage(totalPages)
      };
    
      const goToPreviousPage = () => {
        const previousPage = page - 1;
        if (page === 1) {
          console.log("no se puede seguir bajando");  
        } else {
          setPage(previousPage)
        }
      };
    
      const goToNextPage = () => {
        const nextPage = page + 1;
        if(page === totalPages){
          console.log("nose puede seguir avanzando");
        }else{
          setPage(nextPage)
        }
      };

  return (
    <div className='flex justify-center items-center  gap-4 pb-4'>
            <button  onClick={goToFirstPage} className="border border-red-200 px-1 rounded-md ">Primera</button>
            <button  onClick={goToPreviousPage} className='border border-red-200 p-1 rounded-md'><img className='w-[24px]' src="/src/assets/leftArrow.png" alt="flecha" /></button>
            <h4>Pagina {page} de {totalPages}</h4>
            <button   onClick={goToNextPage} className='border border-red-200 p-1 rounded-md'><img className='w-[24px]' src="/src/assets/rightArrow.png" alt="flecha" /></button>
            <button  onClick={goToLastPage} className='border border-red-200 px-1 rounded-md'>Última</button>
    </div>
  )
}

export default Paginated