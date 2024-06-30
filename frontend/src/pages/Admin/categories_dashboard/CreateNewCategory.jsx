import CreateCategoryForm from "../../../components/CreateCategoryForm/CreateCategoryForm";
import NavAside from "../../../components/NavAside/NavAside";
import Title from "../../../components/Title/Title";

const CreateNewCategory = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow flex w-full bg-gradient-to-b from-[#F8F8F8] to-[#e7d6d6] overflow-hidden">
        <NavAside />
        <section className="right_section w-full pl-20 px-4 flex flex-col items-center gap-4">
          <Title />
          <CreateCategoryForm />
        </section>
      </main>
      
    </div>
  );
};

export default CreateNewCategory;
