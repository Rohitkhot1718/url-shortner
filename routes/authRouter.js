import express from 'express'
import { handleSignUp, handleSignIn, handleSignOut } from '../controllers/user.js'

const router = express.Router()

router.post('/signup', handleSignUp)
router.post('/signin', handleSignIn)
router.get('/signout', handleSignOut)


export default router