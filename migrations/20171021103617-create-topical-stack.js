'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('topical_stacks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      urls: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      resource_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model: 'resources',
          key: 'id'
        },
        onUpdate: "cascade",
        onDelete: "cascade"
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('topical_stacks');
  }
};