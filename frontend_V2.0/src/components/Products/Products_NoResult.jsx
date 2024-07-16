import { product_no_content } from "../../styles";

const Products_NoResult = () => {
  return (
    <div className={product_no_content}>
      <h2 className="bg-white relative rounded-lg p-4 mr-60">
        No se encontraron resultados para esta consulta
      </h2>
    </div>
  );
};

export default Products_NoResult;
