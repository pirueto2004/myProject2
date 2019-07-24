module.exports = function(sequelize, DataTypes) {
  var Low = sequelize.define("Low", {
    ProductId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    ProductName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ProductDetails: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Gender: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Brand: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Units: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    UnitPrice: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    }
  });

  // Product.associate = function(models) {
  //   // We're saying that a new product should belong to a brand
  //   // A Product can't be created without a brand due to the foreign key constraint
  //   Product.belongsTo(models.Brand);
  // };

  return Low;
};
