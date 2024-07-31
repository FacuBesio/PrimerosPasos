import Table_Head from "./Table_Head";
import { transition_200 } from "../../../styles";
import useSubcategories from "../../../hooks/Subcategories/useSubcategories";
import Table_Subcategories_Iterator from "./Table_Subcategories_Iterator";

const Subcategories_Table = () => {
  const { allSubcategories } = useSubcategories();

  return (
    <div className={`overflow-x-auto w-full ${transition_200}`}>
      <table className="w-full border border-collapse bg-white">
        <thead>
          <Table_Head />
        </thead>
        <tbody className="text-center ">
          <Table_Subcategories_Iterator allSubcategories={allSubcategories} />
        </tbody>
      </table>
    </div>
  );
};

export default Subcategories_Table;
