
const handlerFormLabel = (user) => {
if(user){

  const formLabelsPersonalInfo = [
    
    {
      spanName: "Nombre",
      type: "text",
      name: "name",
      value: user.name,
      placeholder: "Luciano",
    },
    {
      spanName: "Email",
      type: "text",
      name: "email",
      value: user.email,
      placeholder: "a@gmail.com",
    },
    {
      spanName: "Pais",
      type: "text",
      name: "country",
      value: user.country,
      placeholder: "Argentina",
    },
    {
      spanName: "Provincia",
      type: "text",
      name: user.state,
      value: "",
      placeholder: "Buenos Aires",
    },
    {
      spanName: "Ciudad",
      type: "text",
      name: "city",
      value: user.city,
      placeholder: "San jorge",
    },
    {
      spanName: "Calle",
      type: "text",
      name: "street",
      value: user.street,
      placeholder: "Av los arbustos",
    },
    {
      spanName: "Número de la calle",
      type: "number",
      name: "streetNumber",
      value: user.street_number,
      placeholder: "23414",
    },
    {
      spanName: "Código postal",
      type: "number",
      name: "postal",
      value: user.ZIP_code,
      placeholder: "3232",
    },
    {
      spanName: "Nro. de teléfono",
      type: "number",
      name: "phone",
      value: user.phone,
      placeholder: "14245324",
    },
  ];

  return formLabelsPersonalInfo
}
}



  
  export default handlerFormLabel;
  