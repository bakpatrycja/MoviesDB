import * as Sequelize from 'sequelize'
import db from '../db.js'

const Movie = db.define('Movies', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  Director: Sequelize.STRING,
  Genre: Sequelize.STRING,
  Released: Sequelize.DATE,
  Title: Sequelize.STRING,
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
  createdBy: Sequelize.STRING
})

export default Movie
