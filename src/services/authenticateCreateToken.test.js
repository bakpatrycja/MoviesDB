import { authFactory } from './authenticateCreateToken'
const expect = require('chai').expect

require('dotenv').config()
const { BASIC_USERNAME, BASIC_PASSWORD } = process.env

describe('authenticateCreateToken file', function () {
  describe('Check if token is created.', function () {
    const { JWT_SECRET } = process.env
    const auth = authFactory(JWT_SECRET)

    it('should return length of token. (length means token exist)', function () {
      expect(auth(BASIC_USERNAME, BASIC_PASSWORD)).to.have.lengthOf.above(0)
    })
  })
})
