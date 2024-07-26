import Category_Tag from "./category_tag/Category_Tag.jsx";
import Search_Tag from "./search_tag/Search_Tag.jsx";
import BrandSelector_Tag from "./filter_tags/BrandSelector_Tag.jsx";
import { invisible, tagsStyle, visible } from "../../styles.js";
import useTags from "../../hooks/Tags/useTags.js";
import ColorSelector_Tag from "./filter_tags/ColorSelector_Tag.jsx";
import SizeSelector_Tag from "./filter_tags/SizeSelector_Tag.jsx";
import PriceSelector_Tag from "./filter_tags/PriceSelector_Tag.jsx";
import useLoadEffect from "../../hooks/Effects/useLoadEffect.js";

const Tags = () => {
  const { loadEffect } = useLoadEffect();
  const { areTagsActive } = useTags();

  const tags_visibility = loadEffect && areTagsActive ? visible : invisible;

  return (
    <div className={`${tagsStyle} ${tags_visibility}`}>
      <>
        <Category_Tag />
        <Search_Tag />
        <BrandSelector_Tag />
        <ColorSelector_Tag />
        <SizeSelector_Tag />
        <PriceSelector_Tag />
      </>
    </div>
  );
};

export default Tags;
