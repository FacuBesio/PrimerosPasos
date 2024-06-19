import { Route, Routes } from "react-router-dom";
import ManageCategories from "./categories_dashboard/ManageCategories";
import CreateNewCategory from "./categories_dashboard/CreateNewCategory";

//? "/manageCategories"
const CategoriesDashboard = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<ManageCategories />} />
        <Route path="/create" element={<CreateNewCategory />} />
        {/* <Route path="/edit" element={<EditProduct />} /> */}
      </Routes>
    </>
  );
};

export default CategoriesDashboard;
