import useCategories from "../../../hooks/Categories/useCategories";
import Table_Head from "./Table_Head";
import Table_Categories_Iterator from "./Table_Categories_Iterator";
import { transition_200 } from "../../../styles";

const Categories_Table = () => {
  const { allCategories } = useCategories();

  return (
    <div className={`overflow-x-auto w-full ${transition_200}`}>
      <table className="w-full border border-collapse bg-white">
        <thead>
          <Table_Head />
        </thead>
        <tbody className="text-center ">
          <Table_Categories_Iterator allCategories={allCategories} />
        </tbody>
      </table>
    </div>
  );
};

export default Categories_Table;
