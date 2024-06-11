import useLoading from "../../hooks/useLoading";
import AditionalInfo from "../AditionalInfo/AditionalInfo";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import Loader from "../Loader/Loader";

const Main = () => {
  const { loading, delayLoading } = useLoading();
  if (loading || delayLoading) {
    return <Loader delayLoading={delayLoading} />;
  }
  
  return (
    <>
      <Banner />
      <AditionalInfo />
      <Categories />
    </>
  );
};

export default Main;
