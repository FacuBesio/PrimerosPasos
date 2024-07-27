import { useState, useEffect } from "react";
import getColors from "../../services/Colors/getColors";

const useColors = () => {
  const [allColors, setAllColors] = useState([]);

  useEffect(() => {
    getColors().then((data) => setAllColors(data));
  }, []);

  return { allColors };
};

export default useColors;
