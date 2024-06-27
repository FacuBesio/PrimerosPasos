import { Marquee, Title, Navbar, Footer } from "../../components";
import Profile_NavAside from "../../components/Profile_NavAside/Profile_NavAside";
import UpdateProfileForm from "../../components/UpdateProfileForm/UpdateProfileForm";


const UserProfile_update = () => {
  return (
    <div>
      <Marquee />
      <Title />
      <Navbar />
      <section className="border border-red-200  bg-gray-200">
        <main className="flex-grow flex w-full bg-gradient-to-b from-[#F8F8F8] to-[#e7d6d6] overflow-hidden">
          <Profile_NavAside />
          <UpdateProfileForm />
        </main>
      </section>
      <Footer />
    </div>
  );
};

export default UserProfile_update;
