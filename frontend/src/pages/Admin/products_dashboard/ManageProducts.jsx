import { useCallback, useContext } from "react";
import { Footer, Title } from "../../../components";
import { Link } from "react-router-dom";
import { PagesContext, ProductsContext, SearchContext } from "../../../context";
import Paginated from "../../../components/Paginated/Paginated";
import SortComponent from "../../../components/SortComponent/SortComponent";
import NavAside from "../../../components/NavAside/NavAside";
import Products_Table from "../../../components/Products_Table/Products_Table";
import Filter from "../../../components/Filter/Filter";


const ManageProducts = () => {
  const { page, setPage } = useContext(PagesContext);
  const { allProducts } = useContext(ProductsContext);
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
        <section className="right_section w-full px-10 flex flex-col items-center gap-4">
          <Title />
          <div className="flex w-full p-4 md:gap-4 items-center justify-between overflow-x-auto">
            <Link to={"/admin/manageProducts/create"}>
              <label
                htmlFor="addProduct"
                className="px-6 py-3 bg-slate-400 text-white font-bold rounded-md hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-green-400 cursor-pointer"
              >
                + Agregar Producto
              </label>
            </Link>
            <Filter />
            <form className="flex gap-2">
              <input
                placeholder="Buscar"
                className="px-1 rounded-md border border-red-100 max-w-[160px]"
                type="text"
                value={searchBar}
                onChange={onChangeSearchBar}
              />
              <button>
                <img
                  className="w-[30px] hover:scale-110"
                  src="/src/assets/VectorSearch.png"
                  alt="Search Icon"
                />
              </button>
            </form>
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
      <Footer />
    </div>
  );
};

export default ManageProducts;
