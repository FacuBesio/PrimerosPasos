/* eslint-disable react/prop-types */

import BeatLoader from "react-spinners/BeatLoader";

const Loader = ({ delayLoading }) => {
  return (
    <section className="w-full flex flex-col justify-center items-center h-screen">
      <h2>Cargando...</h2>
      <BeatLoader
      className="w-full flex justify-center items-center "
        loading={delayLoading}
        size={15}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </section>
  );
};

export default Loader;
