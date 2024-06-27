const { DataTypes } = require("sequelize");

module.exports = (dataBase) => {
  dataBase.define(
    "Product",
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

      brand: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      color: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      size: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      stock: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
      },

      rating: {
        type: DataTypes.FLOAT,
        defaultValue: 3,
      },

      img: {
        type: DataTypes.STRING,
      },
    },
    {
      indexes: [
        {
          unique: true,
          fields: ["name", "color", "size"],
        },
      ],
      timestamps: false,
    }
  );
};
