'use strict';
module.exports = (sequelize, DataTypes) => {
  const Brand = sequelize.define('Brand', {
    BrandId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    BrandName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  
  Brand.associate = function(models) {
    // associations can be defined here
  };
  return Brand;
};