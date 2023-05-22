import express from 'express'
import cors from 'cors'
import { conn }from './db/conn'
import { router as routes } from './routes/router'

const passport = require('passport')
const session = require('express-session')

const app = express()
app.use(cors())
app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'SECRET'
}))
app.set('view engine', 'ejs');
app.use(express.json())
app.use(passport.initialize())
app.use(passport.session())


//Database connection
conn()

//Routes
app.use('/api/v1', routes)

app.listen(process.env.PORT || 3000, () => console.log(`Server running on port ${process.env.PORT || 3000}`))