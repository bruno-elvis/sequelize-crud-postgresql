'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('vehicles', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false

      },

      type: {
        type: Sequelize.STRING,
        allowNull: false

      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false

      },

      updated_at: {
        type: Sequelize.DATE,
        allowNull: false

      }

    } );

  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable('vehicles');
  }

};