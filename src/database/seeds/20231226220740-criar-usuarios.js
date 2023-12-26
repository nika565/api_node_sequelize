'use strict';

const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    // Dados que serão inseridos na tabela especificada.

    return await queryInterface.bulkInsert('users', [
      {
        nome: "Gon",
        email: "gon@email.com",
        password_hash: await bcrypt.hash('123456', 10),
        created_at: new Date(),
        updated_at: new Date()
      },

      {
        nome: "Killua",
        email: "kill@email.com",
        password_hash: await bcrypt.hash('123456', 10),
        created_at: new Date(),
        updated_at: new Date()
      },

      {
        nome: "kurapika",
        email: "kurapika@email.com",
        password_hash: await bcrypt.hash('123456', 10),
        created_at: new Date(),
        updated_at: new Date()
      },

      {
        nome: "Leorio",
        email: "leorio@email.com",
        password_hash: await bcrypt.hash('123456', 10),
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});

  },

  async down() { }
};
