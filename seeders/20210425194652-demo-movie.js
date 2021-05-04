'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Movies', [{
      Director: 'Patrycja Bak',
      Genre: 'Romantic',
      createdAt: new Date(),
      updatedAt: new Date(),
      createdBy: 'premium',
      Title: 'Caught in web',
      Released: new Date()
    }])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
}
