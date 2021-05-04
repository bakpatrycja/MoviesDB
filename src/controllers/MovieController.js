import e, * as express from 'express'
import { StatusCode } from 'status-code-enum'
import MovieRepo from '../repository/MovieRepo'
import authenticateRole from '../services/authenticateRole'
import authenticateJWT from '../services/authenticateToken'
import omdApi, { omdbError } from '../services/omdbUtils'
import checkBasicUser, {routerUtilsError} from '../services/routerUtils'
const router = express.Router()

router.get('/', authenticateJWT, async (req, res) => {
  const repo = new MovieRepo()

  try {
    const collection = await repo.getUserRecords(authenticateRole(req))
    return res.status(StatusCode.SuccessOK).json(collection)
  } catch (err) {
    console.log(err)
    res.send(err)
    return res.status(StatusCode.ServerErrorInternal).end()
  }
})

router.post('/', authenticateJWT, async (req, res) => {
  const { title } = req.body
  if (!title) {
    return res.status(StatusCode.ClientErrorBadRequest).json({
      message: 'Title is missing'
    })
  }
try {
  const answer = await checkBasicUser(req)
  if (answer) {
    return res.status(StatusCode.ClientErrorForbidden).json({ message: 'Basic user can create only 5 records per month.' }).end()
  }
} catch (error) {
  if (error instanceof routerUtilsError) {
    return res.status(StatusCode.ClientErrorBadRequest).json({ error: error.message })
  }
  next(error)
}

  try {
    const movieToSave = await omdApi(title, authenticateRole(req))
    try {
      const repo = new MovieRepo()
      const collection = await repo.create(movieToSave)
      return res.status(StatusCode.SuccessCreated).json(movieToSave)
    } catch (err) {
      console.log(err)
      return res.status(StatusCode.ServerErrorInternal).json({
        message: `An error occured: ${err}`
      })
    }
  } catch (error) {
    if (error instanceof omdbError) {
      return res.status(StatusCode.ClientErrorBadRequest).json({ error: error.message })
    }
    next(error)
  }
})

export default router
