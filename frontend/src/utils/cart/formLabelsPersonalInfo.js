const handlerFormLabel = (user) => {
  if (user) {
    return [
      {
        spanName: "Nombre",
        type: "text",
        name: "name",
        value: user.name || "",
        placeholder: "Luciano",
      },
      {
        spanName: "Email",
        type: "text",
        name: "email",
        value: user.email || "",
        placeholder: "a@gmail.com",
        disabled: true
      },
      {
        spanName: "Pais",
        type: "text",
        name: "country",
        value: user.country || "",
        placeholder: "Argentina",
      },
      {
        spanName: "Provincia",
        type: "text",
        name: "state",
        value: user.state || "",
        placeholder: "Buenos Aires",
      },
      {
        spanName: "Ciudad",
        type: "text",
        name: "city",
        value: user.city || "",
        placeholder: "San jorge",
      },
      {
        spanName: "Calle",
        type: "text",
        name: "street_address", 
        value: user.street_address || "",
        placeholder: "Av los arbustos",
      },
      {
        spanName: "Número de la calle",
        type: "number",
        name: "street_number",
        value: user.street_number || "",
        placeholder: "23414",
      },
      {
        spanName: "Código postal",
        type: "number",
        name: "ZIP_Code", 
        value: user.ZIP_Code || "",
        placeholder: "3232",
      },
      {
        spanName: "Nro. de teléfono",
        type: "number",
        name: "phone",
        value: user.phone || "",
        placeholder: "14245324",
      },
    ];
  }
  return [];
};

export default handlerFormLabel;
