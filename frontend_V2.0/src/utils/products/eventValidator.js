const eventValidator = (event) => {
  const property = event.target.name;
  let value = event.target.value;

  if (event.target.type === "file") {
    value = event.target.files[0];
    return { [property]: value };
  }
 
  if (event.target.name === "category") {
    return {
      [property]: value,
      subcategory: "",
    };
  }

  return { [property]: value };
};

export default eventValidator;
