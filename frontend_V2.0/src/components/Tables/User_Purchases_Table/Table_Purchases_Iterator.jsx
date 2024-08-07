import {
  CheckCircleOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

const Table_Purchases_Iterator = ({ allUserPurchases }) => {
  return (
    <>
      {allUserPurchases?.purchases?.map((purchase) => (
        <tr key={purchase.id}>
          <td className="p-1 md:p-4 border text-center">{purchase.id}</td>
          <td className="p-1 md:p-4 border text-center">
            {purchase.created_date}
          </td>
          <td className="p-1 md:p-4 border text-center">
            {purchase.created_time}
          </td>
          <td className="p-1 md:p-4 border">{purchase.User.name}</td>
          <td className="p-1 md:p-4 border text-center">
            {purchase.User.email}
          </td>
          <td className="p-1 md:p-4 border">{purchase.merchant_order_id}</td>
          <td className="p-1 md:p-4 border">{purchase.payment_id}</td>
          <td className="p-1 md:p-4 border">{purchase.payment_type}</td>
          <td className="p-1 md:p-4 border">
            {purchase.payment_status === "succeded" ? (
              <span className="text-green-500 text-2xl">
                <CheckCircleOutlined />
              </span>
            ) : (
              <span className="text-orange-400 text-2xl">
                <ExclamationCircleOutlined />
              </span>
            )}
          </td>
        </tr>
      ))}
    </>
  );
};

export default Table_Purchases_Iterator;
