import pino from 'express-pino-logger'
import bodyParser from 'body-parser'
import * as dotenv from 'dotenv'
import express from 'express'
import * as userRouter from './routes/user.routes.js'
import * as userController from './controllers/user.controller.js'
import coursesRouter from './routes/courses.routes.js'

const app = express()
const PORT = 3001
dotenv.config()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(pino())

app.use('/api', coursesRouter)

app.listen(PORT, () =>
  console.log(`Es servidor se esta ejecutando en el puerto:${PORT}`)
)
