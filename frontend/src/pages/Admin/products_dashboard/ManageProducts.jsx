import { useCallback, useContext, useRef } from "react";
import { Footer, Title } from "../../../components";
import { Link } from "react-router-dom";
import { FlagCartEffectContext, PagesContext, ProductsContext, SearchContext } from "../../../context";
import Paginated from "../../../components/Paginated/Paginated";
import SortComponent from "../../../components/SortComponent/SortComponent";
import NavAside from "../../../components/NavAside/NavAside";
import Products_Table from "../../../components/Products_Table/Products_Table";
import Filter from "../../../components/Filter/Filter";
<<<<<<< HEAD
import filter from "../../../assets/filter.png"
=======
import searchIcon from '../../../assets/VectorSearch.png'
>>>>>>> db318f662c972e9241b1011aef5cd975f287f922

const ManageProducts = () => {
  const { page, setPage } = useContext(PagesContext);
  const { allProducts } = useContext(ProductsContext);
  const { flagFilter, setFlagFilter } = useContext(FlagCartEffectContext);
  const filterOpenRef = useRef(false); 

  const handlerFilterActive = () => {
    filterOpenRef.current = !filterOpenRef.current;
    setFlagFilter(!flagFilter);
  };

  const { searchBar, setSearchBar, setSearchBarTag } =
    useContext(SearchContext);

  const onChangeSearchBar = useCallback(
    (event) => {
      setSearchBar(event.target.value);
      setSearchBarTag(event.target.value);
      setPage(1);
    },
    [setSearchBar, setSearchBarTag, setPage]
  );

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow flex w-full bg-gradient-to-b from-[#F8F8F8] to-[#e7d6d6] overflow-hidden">
        <NavAside />
        <section className="right_section w-full pb-2 pl-20 px-4 flex flex-col items-center gap-4">
          <Title />
          <div className="flex w-full gap-2 md:gap-4 items-center justify-between overflow-x-auto">
            <Link
              className="bg-slate-400 hover:bg-slate-500 rounded-md p-3 text-center"
              to={"/admin/manageProducts/create"}
            >
              <label
                htmlFor="addProduct"
                className="text-white font-bold cursor-pointer text-[12px] md:text-[18px]"
              >
                + Agregar Producto
              </label>
            </Link>
            <form className="flex gap-2">
              <input
                placeholder="Buscar"
                className="px-1 rounded-md border border-red-100 max-w-[160px] text-[12px] md:text-[18px]"
                type="text"
                value={searchBar}
                onChange={onChangeSearchBar}
              />
              <button>
                <img
                  className="w-[30px] hover:scale-110"
                  src={searchIcon}
                  alt="Search Icon"
                />
              </button>
            </form>
            <Filter />
            <SortComponent />
          </div>
          <Products_Table />
          <Paginated
            page={page}
            totalPages={allProducts?.totalPages}
            setPage={setPage}
          />
        </section>
      </main>
    </div>
  );
};

export default ManageProducts;
