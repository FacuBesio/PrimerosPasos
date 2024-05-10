import "./App.css";
import {
  Marquee, Title, Navbar,Banner,AditionalInfo,Categories,Footer
} from "./components"


function App() {
  return (
    <main className="bg-[#eae0f5]  overflow-hidden">
      <div className="h-screen">
     <Marquee />
     <Title />
     <Navbar />
     <Banner />
     </div>
     <AditionalInfo />
     <Categories />
     <Footer />
    </main>
  );
}

export default App;
