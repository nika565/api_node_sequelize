'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.createTable('fotos', { 

      // Campos que as tabelas devem ter:
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },

      originalname: {
        type: Sequelize.STRING,
        allowNull: false
      },

      filename: {
        type: Sequelize.STRING,
        allowNull: false
      },

      // FK da tabela de alunos
      aluno_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'alunos',
          key: 'id'
        },

        onDelete: "SET NULL",
        onUpdate: 'CASCADE'
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },

      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      },

    });
  },

  async down (queryInterface, Sequelize) {
    
    return await queryInterface.dropTable('fotos');
     
  }
};
