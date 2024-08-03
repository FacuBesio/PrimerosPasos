import { useContext, useEffect, useState } from "react";
import searchIcon from "../../assets/VectorSearch.png";
import { SearchContext } from "../../context/SearchContext";
import { PagesContext, TagsContext } from "../../context";
import { useNavigate } from "react-router-dom";
import useAdminNavegation from "../../hooks/Admin/useAdminNavegation";

const SearchBar = () => {
  const navigate = useNavigate();
  const { setPage } = useContext(PagesContext);
  const { serach, setSearch } = useContext(SearchContext);
  const { setSearchTag } = useContext(TagsContext);
  const { adminNavegationActive } = useAdminNavegation();
  const [inputData, setInputData] = useState("");

  console.log("inputData: ", inputData);

  useEffect(() => {
    if (inputData === "") {
      setSearch("");
      setSearchTag("");
    }
  }, [inputData]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearch(inputData);
    setSearchTag(inputData);
    !adminNavegationActive && navigate("/shop");
  };

  const onChangeSearchBar = (event) => {
    setInputData(event.target.value);
    if (adminNavegationActive) {
      setTimeout(() => {
        setSearch(event.target.value);
        setSearchTag(event.target.value);
        setPage(1);
      }, 300);
    }
  };

  return (
    <form className="flex gap-2 items-center" onSubmit={handleSubmit}>
      <input
        name="searchDataInput"
        className="p-1 rounded-md border placeho border-red-100 max-w-[160px] h-fit text-[12px] md:text-[16px]"
        type=""
        onChange={onChangeSearchBar}
        value={inputData}
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
