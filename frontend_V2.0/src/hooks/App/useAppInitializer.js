import { useEffect } from "react";
import appInitializer from "../../utils/app/appInitializer"

const useAppInitializer = () => {
  useEffect(() => {
    appInitializer();
  }, []);
};

export default useAppInitializer;
