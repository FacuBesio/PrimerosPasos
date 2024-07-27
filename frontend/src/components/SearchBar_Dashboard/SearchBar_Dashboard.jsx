import { useContext } from "react";
import { PagesContext, SearchContext } from "../../context";
import searchIcon from "../../assets/VectorSearch.png";

function SearchBar_Dashboard() {
  const { setPage } = useContext(PagesContext);

  const { searchBar, setSearchBar, setSearchBarTag } =
    useContext(SearchContext);

  const onChangeSearchBar = (event) => {
    setSearchBar(event.target.value);
    setSearchBarTag(event.target.value);
    setPage(1);
  };
  return (
    <div>
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
    </div>
  );
}

export default SearchBar_Dashboard;
