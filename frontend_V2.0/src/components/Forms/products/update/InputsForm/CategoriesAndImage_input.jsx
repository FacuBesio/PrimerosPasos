import Image_input from "./Image_input";
import useCategories from "../../../../../hooks/Categories/useCategories";
import useSubcategories from "../../../../../hooks/Subcategories/useSubcategories";

const CategoriesAndImage_input = ({ handlerChange, updateProduct, errors }) => {
  const { allCategories } = useCategories();
  const { allSubcategories } = useSubcategories();

  const selectedCategory = allCategories?.categories?.find(
    (category) => category.id === Number(updateProduct.category)
  );

  return (
    <div className="w-full px-4 py-1 flex gap-10">
      <div className="w-1/2 flex flex-col gap-4 text-[12px] md:text-[18px]">
        <div className="flex flex-col gap-2">
          <label htmlFor="category" className="w-full text-white font-bold">
            Categoría
          </label>
          <select
            id="category"
            name="category"
            className="w-full px-4 py-2 bg-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
            onChange={handlerChange}
            value={updateProduct.category}
          >
            <option
              value=""
              className="bg-gray-300 rounded-md hover:bg-gray-400 bg-opacity-75"
              disabled
            >
              Seleccioná una categoría...
            </option>
            {allCategories?.categories?.map((category) => {
              return (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              );
            })}
          </select>
        </div>

        {selectedCategory?.subcategories?.length > 0 && (
          <div className="flex flex-col gap-2">
            <label
              htmlFor="subcategory"
              className="w-full text-white font-bold"
            >
              Subcategoría
            </label>
            <select
              id="subcategory"
              name="subcategory"
              className="w-full px-4 py-2 bg-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
              onChange={handlerChange}
              value={updateProduct.subcategory}
            >
              <option
                value=""
                className="bg-gray-300 rounded-md hover:bg-gray-400 bg-opacity-75"
                disabled
              >
                Seleccioná una categoría...
              </option>
              {allSubcategories?.subcategories?.map((subcategory) => {
                return (
                  <option key={subcategory.id} value={subcategory.id}>
                    {subcategory.name}
                  </option>
                );
              })}
            </select>
          </div>
        )}
        <div className="relative w-full" style={{ minHeight: "1rem" }}>
          <span
            className="absolute w-full text-red-300 font-bold"
            style={{ visibility: !errors.category ? "hidden" : "visible" }}
          >
            {errors.category_message}
          </span>
        </div>
      </div>

      <Image_input handlerChange={handlerChange} errors={errors} />
    </div>
  );
};

export default CategoriesAndImage_input;
