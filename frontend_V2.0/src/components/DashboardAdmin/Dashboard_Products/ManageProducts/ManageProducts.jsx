import { useContext } from "react";
import FilterBar from "../../FilterBar/FilterBar";
import Paginated from "../../../Paginated/Paginated";
import Products_Table from "../../Products_Table/Products_Table";
import { PagesContext } from "../../../../context";
import useProducts from "../../../../hooks/Products/useProducts";
import { invisible, transition_200, visible } from "../../../../styles";

const ManageProducts = () => {
  const { page, setPage } = useContext(PagesContext);
  const { allProducts, areProductsLoaded } = useProducts();

  console.log("allProducts: ", allProducts);
  
  const product_visibility = areProductsLoaded
  ? visible
  : invisible;

  return (
    <div className={`flex flex-col gap-4 min-h-screen`}>
      <FilterBar />
      <div className={`flex flex-col gap-4 ${transition_200} ${product_visibility}`}>
      <Products_Table allProducts={allProducts} />
      <Paginated
        page={page}
        totalPages={allProducts?.totalPages}
        setPage={setPage}
      />
      </div>
    </div>
  );
};

export default ManageProducts;
