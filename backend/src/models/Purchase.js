const { DataTypes } = require("sequelize");

module.exports = (dataBase) => {
  dataBase.define(
    "Purchase",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      payment_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      payment_type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      payment_status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      merchant_order_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      preference_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
