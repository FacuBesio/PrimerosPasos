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
        type: DataTypes.ENUM(
          "black",
          "blue",
          "brown",
          "gray",
          "green",
          "orange",
          "pink",
          "purple",
          "red",
          "white",
          "yellow"
        ),
        allowNull: false,
      },

      size: {
        type: DataTypes.ENUM(
          "extra small",
          "small",
          "medium",
          "large",
          "extra large",
          "extra extra large"
        ),
        allowNull: false,
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
