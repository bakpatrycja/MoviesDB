import { app } from '../server'
import request from 'supertest'
import { StatusCode } from 'status-code-enum'
import { authFactory } from './authenticateCreateToken'
const requestApp = request(app)
const expect = require('chai').expect

require('dotenv').config()
const { BASIC_USERNAME, BASIC_PASSWORD } = process.env

const generateToken = (username, password) => {
  const { JWT_SECRET } = process.env
  const auth = authFactory(JWT_SECRET)
  return auth(username, password)
}

describe('authenticateToken file', function () {
  describe('Check token.', function () {
    it('should check if token is invalid.', async () => {
      const exampleTokenInvalid = {
        headers: {
          authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyMywibmFtZSI6IkJhc2ljIFRob21hcyIsInJvbGUiOiJiYXNpYyIsImlhdCI6MTYwNjIyMTgzOCwiZXhwIjoxNjA2MjIzNjM4LCJpc3MiOiJodHRwczovL3d3dy5uZXRndXJ1LmNvbS8iLCJzdWIiOiIxMjMifQ.KjZ3zZM1lZa1SB8U-W65oQApSiC70ePdkQ7LbAhpUQg'
        }
      }
      const response = await requestApp.get('/movies').set('authorization', exampleTokenInvalid.headers.authorization)
      expect(response.status).to.be.oneOf([StatusCode.ClientErrorUnauthorized, StatusCode.ClientErrorForbidden])
    })

    it('should check if token is valid.', async () => {
      const { JWT_SECRET } = process.env
      const auth = authFactory(JWT_SECRET)

      const exampleTokenValid = {
        headers: {
          authorization: 'Bearer ' + generateToken(BASIC_USERNAME, BASIC_PASSWORD)
        }
      }

      const response = await requestApp.get('/movies').set('authorization', exampleTokenValid.headers.authorization)
      expect(response.status).to.equal(StatusCode.SuccessOK)
    })
  })
})
