const formatDateTime = require("./formatDateTime");

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
    createdAt,
  } = purchase;

  const orders = Orders.map((order) => {
    return { id: order.id };
  });

  const created_date = formatDateTime(createdAt).date;
  const created_time = formatDateTime(createdAt).time;

  return {
    id,
    orders,
    User,
    payment_id,
    payment_type,
    payment_status,
    merchant_order_id,
    preference_id,
    created_date,
    created_time,
  };
};

module.exports = formattedPurchases;
