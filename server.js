import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import MongoDBConnection from './config/config.js'
import shortUrlRouter from './routes/shortUrlRouter.js'
import viewRouter from './routes/viewRouter.js'
import authRouter from './routes/authRouter.js'
import { restrictSignIn, checkAuth } from './middlewares/auth.js'


const app = express()
const PORT = 3000

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));
app.use(express.static(path.resolve('public')))

MongoDBConnection()

app.use('/shorten',restrictSignIn, shortUrlRouter)
app.use('/', checkAuth, viewRouter)
app.use('/auth', authRouter)


app.listen(PORT, () => console.log(`Server running on port ${PORT}`))