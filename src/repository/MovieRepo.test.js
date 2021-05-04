import MovieRepo from './MovieRepo'
const expect = require('chai').expect
require('dotenv').config()

describe('Repository file', function () {
  describe('Check token.', function () {
    it('Should return list of records', async () => {
      const repo = new MovieRepo()
      const userRole = 'basic'
      const collection = await repo.getUserRecords(userRole)
      expect(collection).to.be.an('array')
    })

    it('should create example record - sequelize doesntt value in this case, so undefined means everything is ok. If not - error appears.', async () => {
      const repo = new MovieRepo()
      const exampleMovie = {
        Title: 'Matrix',
        Director: 'Paul Van Dyk',
        Released: '2021-04-30 18:06:57',
        Genre: 'Romantic',
        createdBy: 'premium'
      }
      const collection = await repo.create(exampleMovie)
      expect(collection).to.be.a('undefined')
    })

    it('should check how many record is created by basic user.', async () => {
      const repo = new MovieRepo()
      const userRole = 'basic'
      const collection = await repo.GetUserCountedRecords(userRole)
      expect(collection.count).to.be.a('number')
    })
  })
})
