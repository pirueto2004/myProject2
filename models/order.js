"use strict";
module.exports = function(sequelize, DataTypes) {
  var Order = sequelize.define("Order", {
    OrderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    StoreName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ProductId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ProductName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ProductDetails: {
      type: DataTypes.STRING,
      allowNull: false
    },
    BrandName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Units: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    UnitPrice: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    OrderTotal: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    OrderStatus: {
      type: DataTypes.ENUM({
        values: ["Open", "Closed"]
      }),
      allowNull: false
    }
  });

  // Order.associate = function(models) {
  // associations can be defined here
  // };
  return Order;
};
