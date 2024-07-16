const activeTagsValidator = (categoryTag, filterTags, searchTag, sizeTag) => {
  let areTagsActive = false;
  (categoryTag || filterTags || searchTag || sizeTag) && (areTagsActive = true);

  return areTagsActive;
};

export default activeTagsValidator;
