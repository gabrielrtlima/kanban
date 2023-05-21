import express from 'express'
import cors from 'cors'
import { conn }from './db/conn'
import { router as routes } from './routes/router'

const app = express()
app.use(cors())
app.use(express.json())

//Database connection
conn()

//Routes
app.use('/api/v1', routes)

app.listen(process.env.PORT || 3000, () => console.log(`Server running on port ${process.env.PORT || 3000}`))