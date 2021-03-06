'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('resources', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      url: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      path_1: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      path_2: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      group_id:{
        type: Sequelize.INTEGER,
        allowNull: false
      },
      active: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('resources');
  }
};