import jwt from 'jsonwebtoken'

const userRole = (req) => {
  const authHeader = req.headers.authorization
  const token = authHeader.split(' ')[1]
  const decoded = jwt.decode(token, { complete: true })
  return decoded.payload.role
}

export default userRole
