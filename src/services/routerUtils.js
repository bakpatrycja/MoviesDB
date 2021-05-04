import MovieRepo from '../repository/MovieRepo'
import userRole from '../services/authenticateRole'
export class routerUtilsError extends Error {}

const checkBasicUser = async (token) => {
  const role = userRole(token)

  if (role == 'premium') {
    return false
  }

  try {
    const repo = new MovieRepo()
    const collection = await repo.GetUserCountedRecords(role)
    console.log(collection.count)
    if (collection.count >= 5) {
      return true
    }
  } catch (err) {
    throw new routerUtilsError(err)
  }
}

export default checkBasicUser
