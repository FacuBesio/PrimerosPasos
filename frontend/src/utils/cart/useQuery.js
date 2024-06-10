const useQuery = (useLocation) => {
    const urlQuerys = new URLSearchParams(useLocation().search);
    const merchant_order_id = urlQuerys.get("merchant_order_id");
    const paymentId = urlQuerys.get("payment_id");
    const payment_type = urlQuerys.get("payment_type");
    const preference_id = urlQuerys.get("preference_id");
    const status = urlQuerys.get("status");
    return { merchant_order_id, paymentId, payment_type, preference_id, status};
  };

export default useQuery;
