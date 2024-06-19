import { Route, Routes } from "react-router-dom";
import ManageSubcategories from "./subcategories_dashboard/ManageSubcategories";
import CreateNewSubcategory from "./subcategories_dashboard/CreateNewSubcategory";

//? "/manageSubcategories"
const SubcategoriesDashboard = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<ManageSubcategories />} />
        <Route path="/create" element={<CreateNewSubcategory />} />
        {/* <Route path="/edit" element={<EditProduct />} /> */}
      </Routes>
    </>
  );
};

export default SubcategoriesDashboard;
