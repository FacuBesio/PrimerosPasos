import { useState, useEffect, useContext } from "react";
import { invisible, visible } from "../../styles";
import { CartContext } from "../../context";

const useCartEffects = () => {
  const { setIsCartOpen } = useContext(CartContext);
  const [loadVisibilityEffect, setLoadVisibilityEffect] = useState(false);
  const [loadWidthEffect, setLoadWidthEffect] = useState(false);
  const [loadBlurEffect, setLoadBlurEffect] = useState(false);

  const content_visibility = loadVisibilityEffect ? visible : invisible;

  const blur_efffect = loadBlurEffect
    ? "bg-black bg-opacity-50 backdrop-blur-sm"
    : "";
  const cartAside_width = loadWidthEffect
    ? "w-[80%] sm:w-[70%] md:w-[50%] lg:w-[25%]"
    : "w-0";

  const handleBackdropClick = () => {
    setLoadVisibilityEffect(false);
    setLoadWidthEffect(false);
    setTimeout(() => {
      setLoadBlurEffect(false);
    }, 300);
    setTimeout(() => {
      setIsCartOpen(false);
    }, 500);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoadWidthEffect(true);
    }, 0);
    setTimeout(() => {
      setLoadBlurEffect(true);
    }, 100);
    setTimeout(() => {
      setLoadVisibilityEffect(true);
    }, 300);
  }, []);

  return {
    blur_efffect,
    cartAside_width,
    content_visibility,
    handleBackdropClick,
  };
};

export default useCartEffects;
