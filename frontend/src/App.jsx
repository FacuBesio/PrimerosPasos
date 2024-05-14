import "./App.css";
import {
  AditionalInfo,Categories,Footer,
  Hero
} from "./components"


function App() {
  return (
    <main className="bg-[#eae0f5]  overflow-hidden">
     <Hero />
     <AditionalInfo />
     <Categories />
     <Footer />
    </main>
  );
}

export default App;
