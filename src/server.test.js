import { app } from './server.js'
import request from 'supertest'
import { StatusCode } from 'status-code-enum'
const expect = require('chai').expect
const requestApp = request(app)

require('dotenv').config()
const { BASIC_USERNAME, BASIC_PASSWORD } = process.env

describe('Check endpoints in server.js file', () => {
  it('Testing to see if Mocha works', () => {
    expect(1).to.equal(1)
  })

  it('Test endpoint: http://localhost/', async () => {
    const response = await requestApp.get('/')

    expect(response.status).to.equal(StatusCode.SuccessOK)
    expect(response.text).to.equal('Netguru recruitment task - main page. :)')
  })

  it('Test endpoint: /auth for invalid password or username', async () => {
    const response = await requestApp.post('/auth')
      .set('content-type', 'application/json')
      .send({ username: 'Jean-Luc Picard', password: 'enterprise' })

    expect(response.status).to.equal(StatusCode.ClientErrorUnauthorized)
  })

  it('Test endpoint: /auth for valid password and username', async () => {
    const response = await requestApp.post('/auth')
      .set('content-type', 'application/json')
      .send({ username: BASIC_USERNAME, password: BASIC_PASSWORD })

    expect(response.status).to.equal(StatusCode.SuccessOK)
  })

  it('Test endpoint: /auth for incomplete data: missing password', async () => {
    const response = await requestApp.post('/auth')
      .set('content-type', 'application/json')
      .send({ username: BASIC_USERNAME })

    expect(response.status).to.equal(StatusCode.ClientErrorBadRequest)
    expect(response.text).to.equal('{"error":"invalid payload"}')
  })

  it('Test endpoint: /auth for incomplete data: missing username', async () => {
    const response = await requestApp.post('/auth')
      .set('content-type', 'application/json')
      .send({ password: BASIC_PASSWORD })

    expect(response.status).to.equal(StatusCode.ClientErrorBadRequest)
    expect(response.text).to.equal('{"error":"invalid payload"}')
  })
})
