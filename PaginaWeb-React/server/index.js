import pino from 'express-pino-logger'
import bodyParser from 'body-parser'
import * as dotenv from 'dotenv'
import express from 'express'

const app = express()
const PORT = 3001
dotenv.config()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(pino())

app.listen(PORT, () =>
  console.log(`Es servidor se esta ejecutando en el puerto:${PORT}`)
)
