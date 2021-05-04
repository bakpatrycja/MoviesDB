import * as Sequelize from 'sequelize'
import Movie from '../database/models/Movies.js'

export default class MovieRepo {
  async getUserRecords (role) {
    return await Movie.findAll(
      {
        where: {
          createdBy: role
        }
      }
    )
  }

  async GetUserCountedRecords (role) {
    const currentDate = new Date()
    const currentMonth = currentDate.getMonth() + 1

    return await Movie.findAndCountAll({
      where: {
        createdBy: role,
        createdAt: Sequelize.where(Sequelize.fn('MONTH', Sequelize.col('createdAt')), currentMonth)
      },
      limit: 5
    })
  }

  async create (movie) {
    await Movie.create(movie)
  }
}
