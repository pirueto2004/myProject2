'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Orders', {
      OrderId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      StoreName: {
        type: Sequelize.STRING
      },
      ProductId: {
        type: Sequelize.INTEGER 
      }, 
      ProductName: {
        type: Sequelize.STRING
      },
      ProductDetails: {
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
      OrderTotal: {
        type: Sequelize.DECIMAL
      },
      OrderStatus: {
        type: Sequelize.ENUM
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATETIME
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATETIME
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Orders');
  }
};