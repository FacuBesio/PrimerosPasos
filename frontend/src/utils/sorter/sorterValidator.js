import queryPriceGenerator from "./queryPriceGenerator";
import queryRatingGenerator from "./queryRatingGenerator";

function sorterValidator(sorterByPrice, sorterByRating) {
  let completeQuery = "";

  const validator = {
    sorterActive: false,
    result: "",
  };

  const queryPrice = queryPriceGenerator(sorterByPrice);
  validator.sorterActive = true;
  if (completeQuery !== "") {
    completeQuery = completeQuery + "&" + queryPrice;
  } else {
    completeQuery = queryPrice;
  }

  const queryRating = queryRatingGenerator(sorterByRating);
  validator.sorterActive = true;
  if (completeQuery !== "") {
    completeQuery = completeQuery + "&" + queryRating;
  } else {
    completeQuery = queryRating;
  }

  validator.result = completeQuery;
  // console.log(validator);
  return validator;
}

export default sorterValidator;
