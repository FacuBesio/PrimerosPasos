import queryPriceGenerator from "./queryPriceGenerator";
import queryRatingGenerator from "./queryRatingGenerator";

function sorterValidator(sorterByPrice, sorterByRating) {
  let completeQuery = "";

  const validator = {
    sorterActive: false,
    result: "",
  };

  if (
    sorterByPrice === "" ||
    sorterByPrice === "asc" ||
    sorterByPrice === "desc"
  ) {
    console.log("sorterByPrice: ", sorterByPrice);
    const queryPrice = queryPriceGenerator(sorterByPrice);
    validator.sorterActive = true;
    if (completeQuery !== "") {
      completeQuery = completeQuery + "&" + queryPrice;
    } else {
      completeQuery = queryPrice;
    }
  }

  if (
    sorterByRating === "" ||
    sorterByRating === "asc" ||
    sorterByRating === "desc"
  ) {
    const queryRating = queryRatingGenerator(sorterByRating);
    validator.sorterActive = true;
    if (completeQuery !== "") {
      completeQuery = completeQuery + "&" + queryRating;
    } else {
      completeQuery = queryRating;
    }
  }

  validator.result = completeQuery;
  return validator;
}

export default sorterValidator;
