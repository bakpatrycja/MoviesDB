import express from 'express'
import bodyParser from 'body-parser'
import { StatusCode } from 'status-code-enum'
import { authFactory, AuthError } from './services/authenticateCreateToken'
import MovieController from './controllers/MovieController'
import mysql from './database/db'

require('dotenv').config()
const { JWT_SECRET } = process.env

if (!JWT_SECRET) {
  throw new Error('Missing JWT_SECRET env var. Set it and restart the server')
}

const auth = authFactory(JWT_SECRET)
export const app = express()
app.use(bodyParser.json())

app.get('/healthcheck', async (_, res) => {
  try {
    await mysql.authenticate()
    return res.status(200).json({
      database: 'OK'
    })
  } catch (err) {
    return res.status(500).json({
      server: 'OK',
      database: 'DOWN'
    })
  }
})

app.get('/', (_, res) => {
  res.status(StatusCode.SuccessOK).send('Netguru recruitment task - main page. :)')
})

app.post('/auth', (req, res, next) => {
  if (!req.body) {
    return res.status(StatusCode.ClientErrorBadRequest).json({ error: 'invalid payload' })
  }

  const { username, password } = req.body

  if (!username || !password) {
    return res.status(StatusCode.ClientErrorBadRequest).json({ error: 'invalid payload' })
  }

  try {
    const token = auth(username, password)

    return res.status(StatusCode.SuccessOK).json({ token })
  } catch (error) {
    if (error instanceof AuthError) {
      return res.status(StatusCode.ClientErrorUnauthorized).json({ error: error.message })
    }

    next(error)
  }
})

app.use((error, _, res, __) => {
  console.error(
    `Error processing request ${error}. See next message for details`
  )
  console.error(error)

  return res.status(500).json({ error: 'internal server error' })
})

app.use('/movies', MovieController)
