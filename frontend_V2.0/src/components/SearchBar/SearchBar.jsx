import { useContext } from "react";
import searchIcon from "../../assets/VectorSearch.png";
import { SearchContext } from "../../context/SearchContext";
import { TagsContext } from "../../context";

const SearchBar = () => {
  const { setSearch } = useContext(SearchContext);
  const { setSearchTag } = useContext(TagsContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new window.FormData(event.target));
    const { searchDataInput } = data;
    setSearch(searchDataInput);
    setSearchTag(searchDataInput);
  };

  return (
    <form className="flex gap-2 items-center" onSubmit={handleSubmit}>
      <input
        name="searchDataInput"
        // placeholder="Buscar..."
        className="p-1 rounded-md border placeho border-red-100 max-w-[160px] h-fit text-[12px] md:text-[16px]"
        type="text"
      />
      <button>
        <img
          className="w-[30px] hover:scale-110 transition-transform duration-200"
          src={searchIcon}
          alt="Search Icon"
        />
      </button>
    </form>
  );
};

export default SearchBar;
