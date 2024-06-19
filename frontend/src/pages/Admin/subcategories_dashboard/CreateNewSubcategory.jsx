import CreateSubCategoryForm from "../../../components/CreateSubCategoryForm/CreateSubCategoryForm";
import Footer from "../../../components/Footer/Footer";
import NavAside from "../../../components/NavAside/NavAside";
import Title from "../../../components/Title/Title";
import { mainPages } from "../../../styles";


const CreateNewSubcategory = () => {
  return (
    <main className={mainPages}>
      <div className="w-full flex">
        <NavAside />
        <section className="right_section w-full px-10 flex flex-col items-center">
          <Title />
          <CreateSubCategoryForm />
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default CreateNewSubcategory;
