import { Route, Routes } from "react-router-dom";
import ManageSubcategories from "./subcategories_dashboard/ManageSubcategories";
import CreateNewSubcategory from "./subcategories_dashboard/CreateNewSubcategory";
import UpdateSubcategory from "./subcategories_dashboard/UpdateSubcategory";

//? "/manageSubcategories"
const SubcategoriesDashboard = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<ManageSubcategories />} />
        <Route path="/create" element={<CreateNewSubcategory />} />
        <Route path="/update/:id" element={<UpdateSubcategory />} />
      </Routes>
    </>
  );
};

export default SubcategoriesDashboard;
