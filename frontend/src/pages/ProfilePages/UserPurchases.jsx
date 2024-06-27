import { Marquee, Title, Navbar, Footer } from "../../components";
import Profile_NavAside from "../../components/Profile_NavAside/Profile_NavAside";
import Profile_Purchases from "../../components/Profile_Purchases/Profile_Purchases";

const UserPurchases = () => {
  return (
    <div className="">
      <Marquee />
      <Title />
      <Navbar />
      <section className="border border-red-200  bg-gray-200">
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow flex w-full bg-gradient-to-b from-[#F8F8F8] to-[#e7d6d6] overflow-hidden">
            <Profile_NavAside />
            <Profile_Purchases />
          </main>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default UserPurchases;
