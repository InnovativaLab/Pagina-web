import pino from 'express-pino-logger'
import bodyParser from 'body-parser'
import express from 'express'
import userRouter from './routes/user.routes.js'
import coursesRouter from './routes/courses.routes.js'
import { PORT } from './config.js'
const app = express()

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(pino())
// Configurar cabeceras y cors
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method')
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE')
  next()
})

app.use('/api', userRouter)
app.use('/api', coursesRouter)

app.use((req, res, next) => {
  res.status(404).json({
    message: 'Endpoint not found'
  })
})
app.listen(PORT, () =>
  console.log(`Es servidor se esta ejecutando en el puerto:${PORT}`)
)
