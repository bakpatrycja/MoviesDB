import Movie from '../database/models/Movies.js';
import * as Sequelize from 'sequelize';

export default class MovieRepo {
  async getAllRecords() {
    return await Movie.findAll()
  }

  async getCountOfRecordsCreatedByBasicUserInCurrentMonth() {
    const currentDate = new Date();
    const currentMonth   = currentDate.getMonth() +1;

    return await Movie.findAndCountAll({
      where: {
        createdBy: 'basic',
        createdAt: Sequelize.where(Sequelize.fn('MONTH', Sequelize.col('createdAt')), currentMonth)   
      },
      limit: 7
  })}

  async create(movie) {
    await Movie.create(movie);
  }
}