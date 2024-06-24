const formatDateTime = require("./formatDateTime");

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
      createdAt,
    } = purchase;

    // const orders = Orders.map((order) => order.id);

    const created_date = formatDateTime(createdAt).date;
    const created_time = formatDateTime(createdAt).time;
    return {
      id,
      Orders,
      User,
      payment_id,
      payment_type,
      payment_status,
      merchant_order_id,
      preference_id,
      created_date,
      created_time,
   };
  });

  return formatted;
};

module.exports = formattedPurchases;
