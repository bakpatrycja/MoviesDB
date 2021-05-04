import assert from 'assert'
import omdbApi, {omdbError} from './omdbUtils'
const expect = require('chai').expect
const chai = require('chai')

describe('omdbUtils file', function () {
  describe('Check api for response and error.', function () {
    it('should return a matching object.', async () => {
      const title = 'Matrix'
      const role = 'basic'
      const movieExample = {
        Title: 'Matrix',
        Director: 'N/A',
        Released: '01 Mar 1993',
        Genre: 'Action, Drama, Fantasy, Thriller',
        createdBy: 'basic'
      }

      const movieReturned = await omdbApi(title, role)
      assert.deepStrictEqual(movieReturned, movieExample)
    })
  })
})
