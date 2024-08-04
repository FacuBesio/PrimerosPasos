import { useContext } from "react";
import { filterSelectorStyle_dashboard } from "../../../../styles";
import useCategories from "../../../../hooks/Categories/useCategories";
import { CategoriesContext } from "../../../../context";

function Category_Selector() {
  const { allCategories } = useCategories();
  const { category, setCategory } = useContext(CategoriesContext);

  const handlerChange = (event) => {
    const value = event.target.value;
    setCategory(value)
  }
  return (
    <>
      <select
        className={filterSelectorStyle_dashboard}
        name="category_selector"
        id="category_selector"
        onChange={handlerChange}
        value={category}
      >
        <option value="">All</option>
        {allCategories?.categories?.map((category) => (
          <option
            key={category.id}
            className="text-[#5a5b5a] capitalize"
            value={category.id}
          >
            {category.name}
          </option>
        ))}
      </select>
    </>
  );
}

export default Category_Selector;
