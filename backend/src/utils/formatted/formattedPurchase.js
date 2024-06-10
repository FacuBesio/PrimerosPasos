const formattedPurchases = (purchase) => {
  const {
    id,
    Orders,
    User,
    payment_id,
    payment_type,
    payment_status,
    merchant_order_id,
    preference_id,
  } = purchase;
  const orders = Orders.map((order) => {
    return { id: order.id };
  });
  return {
    id,
    orders,
    User,
    payment_id,
    payment_type,
    payment_status,
    merchant_order_id,
    preference_id,
  };
};

module.exports = formattedPurchases;
