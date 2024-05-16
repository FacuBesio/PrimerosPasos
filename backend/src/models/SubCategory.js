const { DataTypes } = require("sequelize");

module.exports = (dataBase) => {
  const Subcategory = dataBase.define(
    "Subcategory",
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
      
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Categories', // Nombre de la tabla Categories
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }
    },
    {
      timestamps: false,
    }
  );

  return Subcategory;
};
