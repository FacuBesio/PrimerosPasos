import "./App.css";
import {
  Marquee, Title, Navbar,Banner,AditionalInfo,Categories,Footer
} from "./components"


function App() {
  return (
    <main className="bg-[#eae0f5]  overflow-hidden">
     <Marquee />
     <Title />
     <Navbar />
     <Banner />
     <AditionalInfo />
     <Categories />
     <Footer />
    </main>
  );
}

export default App;
