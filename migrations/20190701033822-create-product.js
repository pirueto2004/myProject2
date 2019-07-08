'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ProductName: {
        type: Sequelize.STRING
      },
      ProductDetails: {
        type: Sequelize.STRING
      },
      Gender: {
        type: Sequelize.STRING
      },
      Brand: {
        type: Sequelize.STRING
      },
      Units: {
        type: Sequelize.INTEGER
      },
      UnitPrice: {
        type: Sequelize.DECIMAL
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Products');
  }
};