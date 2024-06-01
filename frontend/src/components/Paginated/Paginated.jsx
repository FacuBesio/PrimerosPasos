/* eslint-disable react/prop-types */


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
    <div className='flex justify-center items-center  gap-4 pb-4 px-4'>
            <button  onClick={goToFirstPage} className="hover:shadow-xl hover:shadow-[#fdd9e3] ease-in duration-200 border border-red-200 px-1 rounded-md bg-white text-[#5a5b5a] ">Primera</button>
            <button  onClick={goToPreviousPage} className='hover:shadow-xl hover:shadow-[#fdd9e3] ease-in duration-200 border border-red-200 p-1 rounded-md bg-white'><img className='w-[24px]' src="/src/assets/leftArrow.png" alt="flecha" /></button>
            <h4 className='text-[#5a5b5a]'>Pagina {page} de {totalPages}</h4>
            <button   onClick={goToNextPage} className='hover:shadow-xl hover:shadow-[#fdd9e3] ease-in duration-200 border border-red-200 p-1 rounded-md bg-white'><img className='w-[24px]' src="/src/assets/rightArrow.png" alt="flecha" /></button>
            <button  onClick={goToLastPage} className='hover:shadow-xl hover:shadow-[#fdd9e3] ease-in duration-200 border border-red-200 px-1 rounded-md bg-white text-[#5a5b5a]'>Última</button>
    </div>
  )
}

export default Paginated