import { Marquee, Title, Navbar, Footer } from "../../components";
import Profile_NavAside from "../../components/Profile_NavAside/Profile_NavAside";
import ProfileForm from "../../components/ProfileForm/ProfileForm";


const UserProfile = () => {
  return (
    <div>
      <Marquee />
      <Title />
      <Navbar />
      <section className="border border-red-200  bg-gray-200">
        <main className="flex-grow flex w-full bg-gradient-to-b from-[#F8F8F8] to-[#e7d6d6] overflow-hidden">
          <Profile_NavAside />
          <ProfileForm />
        </main>
      </section>
      <Footer />
    </div>
  );
};

export default UserProfile;
