import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Loader = ({ delayLoading }) => {
  return (
    <section className="w-full ">
      <ClipLoader
        loading={delayLoading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </section>
  );
};

export default Loader;
