import { Route, Routes } from "react-router-dom";
import ManagePurchases from "./purchases_dashboard/ManagePurchases";


//? "/managePurchases"
const PurchasesDashboard = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<ManagePurchases />} />
        {/* <Route path="/create" element={<CreateNewCategory />} />
        <Route path="/update/:id" element={<UpdateCategory />} /> */}
      </Routes>
    </>
  );
};

export default PurchasesDashboard;
