const formattedPurchases = (purchases) => {
  const formatted = purchases.map((purchase) => {
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
    // const orders = Orders.map((order) => order.id);
    return {
      id,
      Orders,
      User,
      payment_id,
      payment_type,
      payment_status,
      merchant_order_id,
      preference_id,
    };
  });

  return formatted;
};

module.exports = formattedPurchases;
