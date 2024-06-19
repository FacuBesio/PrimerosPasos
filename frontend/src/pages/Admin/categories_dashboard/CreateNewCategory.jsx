import CreateCategoryForm from "../../../components/CreateCategoryForm/CreateCategoryForm";
import Footer from "../../../components/Footer/Footer";
import NavAside from "../../../components/NavAside/NavAside";
import Title from "../../../components/Title/Title";
import { mainPages } from "../../../styles";


const CreateNewCategory = () => {
  return (
    <main className={mainPages}>
      <div className="w-full flex">
        <NavAside />
        <section className="right_section w-full px-10 flex flex-col items-center">
          <Title />
          <CreateCategoryForm />
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default CreateNewCategory;
