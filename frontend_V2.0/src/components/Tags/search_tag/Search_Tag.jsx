import { useContext } from "react";
import { tag_style } from "../../../styles.js";
import { SearchContext } from "../../../context/SearchContext.jsx";
import { TagsContext } from "../../../context/TagsContext.jsx";

const Search_Tag = () => {
  const { setSearch } = useContext(SearchContext);
  const { searchTag, setSearchTag } = useContext(TagsContext);

  const handleRemoveSearchTag = () => {
    setSearch("");
    setSearchTag("");
  };

  return (
    <>
      {searchTag !== "" && (
        <h2 onClick={handleRemoveSearchTag} className={tag_style}>
          {searchTag}
        </h2>
      )}
    </>
  );
};

export default Search_Tag;
