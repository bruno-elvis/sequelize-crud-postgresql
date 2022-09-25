'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('downloads', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false

      },

      count: {
        type: Sequelize.INTEGER,
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
    return queryInterface.dropTable('downloads');
  }

};
