"use strict";
module.exports = function(sequelize, DataTypes) {
  var Brand = sequelize.define("Brand", {
    BrandId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    // Giving the Brand model a name of type STRING
    BrandName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  // Brand.associate = function(models) {
  // Associating Brand with Products
  // When a Brand is deleted, also delete any associated Products
  // Brand.hasMany(models.Product, {
  //   onDelete: "CASCADE"
  // });
  // };

  return Brand;
};
