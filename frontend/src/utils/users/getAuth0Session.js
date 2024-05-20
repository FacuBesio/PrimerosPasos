import { useAuth0 } from "@auth0/auth0-react";


const getAuth0Session = async () => {
  const { user } = useAuth0();

   try {
    console.log("user: ", user);
  } catch (error) {
    console.error("Error al obtener Productos:", error);
  }
};

export default getAuth0Session;
