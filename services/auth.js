import jwt from 'jsonwebtoken'
const SECRET_KEY = 'roy@11718'

export function setUser(user) {
  return jwt.sign({ _id: user._id, username: user.username, email: user.email }, SECRET_KEY, { expiresIn: '24h' })
  
}

export function getUser(token) {
  if (!token) return null
  try {
    return jwt.verify(token, SECRET_KEY)
  } catch (error) {
    return null
  }

}
