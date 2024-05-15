const { DataTypes } = require("sequelize");

module.exports = (dataBase) => {
  dataBase.define(
    "Category",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      
      enabled: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      
      name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
