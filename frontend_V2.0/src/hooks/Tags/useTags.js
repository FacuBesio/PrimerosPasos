import { useContext } from "react";
import { TagsContext } from "../../context";
import activeTagsValidator from "../../utils/tags/activeTagsValidator";

const useTags = () => {
  const { categoryTag, filterTags, searchTag, sizeTag } = useContext(TagsContext);

  const areTagsActive = activeTagsValidator(
    categoryTag,
    filterTags,
    searchTag,
    sizeTag
  );

  return { areTagsActive };
};

export default useTags;
