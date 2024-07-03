import Footer from "../../../components/Footer/Footer";
import NavAside from "../../../components/NavAside/NavAside";
import Title from "../../../components/Title/Title";
import UpdateUserForm from "../../../components/UpdateUserForm/UpdateUserForm";
import { useParams } from "react-router-dom";

const UpdateUser = () => {
  const { id } = useParams();

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow flex w-full bg-gradient-to-b from-[#F8F8F8] to-[#e7d6d6] overflow-hidden">
        <NavAside />
        <section className="right_section w-full pl-20 px-4 flex flex-col items-center gap-4">
          <Title />
          <UpdateUserForm id={id}/>
        </section>
      </main>
     
    </div>
  );
};

export default UpdateUser;
