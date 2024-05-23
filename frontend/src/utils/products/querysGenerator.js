const querysGenerator = (page, searchBar, filter, sorter) => {
  let completeQuery = "";

  const validator = {
    inputsActive: false,
    result: "",
  };

  if (page) {
    validator.inputsActive = true;
    completeQuery !== ""
      ? (completeQuery = completeQuery + "&" + `page=${page}`)
      : (completeQuery = `page=${page}`);
  }

  if (searchBar) {
    const brand_or_name = `brand_or_name=${searchBar}`;
    validator.inputsActive = true;
    completeQuery !== ""
      ? (completeQuery = completeQuery + "&" + brand_or_name)
      : (completeQuery = brand_or_name);
  }

  if (filter.length > 0) {
    validator.inputsActive = true;
    completeQuery !== ""
      ? (completeQuery = completeQuery + "&" + filter)
      : (completeQuery = filter);
  }

  if (sorter) {
    validator.inputsActive = true;
    completeQuery !== ""
      ? (completeQuery = completeQuery + "&" + sorter)
      : (completeQuery = sorter);
  }

  validator.result = completeQuery;

  return validator;
};
export default querysGenerator;
