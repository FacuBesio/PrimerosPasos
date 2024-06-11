import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Footer, Hero, Main } from "../components";
import Loader from "../components/Loader/Loader";
import useLoading from "../hooks/useLoading";

const Home = () => {

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
