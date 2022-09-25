'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('addresses', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false

      },

      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'users', key: 'id'}, // Criação de chave estrangeira de 'addresses' para 'users'
        onUpdate: 'CASCADE', // Sempre que houver alterações na tabela referencia 'users', esta tabela também recebe
        onDelete: 'CASCADE' // Sempre que um registro da tabela referenciada 'users' for excluido, o regsitro vinculado também será
        // 'SET NULL' -> Caso um 'user' foi excluido ou alterado os 'addresses' receberão como valor NULO para este campo de referencia
        // 'RESTRICT' -> Não permite alterar um 'user' se ele possuir um 'address' vinculado

      },

      zipcode: {
        type: Sequelize.STRING,
        allowNull: false

      },

      street: {
        type: Sequelize.STRING,
        allowNull: false

      },

      number: {
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
    return queryInterface.dropTable('addresses');
  }

};