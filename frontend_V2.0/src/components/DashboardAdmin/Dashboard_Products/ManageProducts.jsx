import FilterBar from "../FilterBar/FilterBar";
import Paginated from "../../Paginated/Paginated";
import Products_Table from "../Products_Table/Products_Table";
import { transition_200 } from "../../../styles";

const ManageProducts = () => {
  return (
    <div className={`flex flex-col gap-4 min-h-screen ${transition_200}`}>
      <FilterBar />
      <div className={`flex flex-col gap-4`}>
        <Products_Table />
        <Paginated />
      </div>
    </div>
  );
};

export default ManageProducts;
