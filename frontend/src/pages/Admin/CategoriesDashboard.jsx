import { Route, Routes } from "react-router-dom";
import ManageCategories from "./categories_dashboard/ManageCategories";
import CreateNewCategory from "./categories_dashboard/CreateNewCategory";
import UpdateCategory from "./categories_dashboard/UpdateCategory";

//? "/manageCategories"
const CategoriesDashboard = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<ManageCategories />} />
        <Route path="/create" element={<CreateNewCategory />} />
        <Route path="/update/:id" element={<UpdateCategory />} />
      </Routes>
    </>
  );
};

export default CategoriesDashboard;
