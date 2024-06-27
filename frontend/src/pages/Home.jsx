import { Route, Routes } from "react-router-dom";
import { Footer, Hero, Main } from "../components";
import useStatesReset from "../hooks/useStatesReset";

const Home = () => {
  useStatesReset();

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Main />
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
};

export default Home;
