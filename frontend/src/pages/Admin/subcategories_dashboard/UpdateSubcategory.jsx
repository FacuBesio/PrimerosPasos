import Footer from "../../../components/Footer/Footer";
import NavAside from "../../../components/NavAside/NavAside";
import Title from "../../../components/Title/Title";
import UpdateSubCategoryForm from "../../../components/UpdateSubCategoryForm/UpdateSubCategoryForm";
import { useParams } from "react-router-dom";

const UpdateSubcategory = () => {
  const { id } = useParams();
 
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow flex w-full bg-gradient-to-b from-[#F8F8F8] to-[#e7d6d6] overflow-hidden">
        <NavAside />
        <section className="right_section w-full pl-12 flex flex-col items-center">
          <Title />
          <UpdateSubCategoryForm id={id} />
        </section>
      </main>
     
    </div>
  );
};

export default UpdateSubcategory;