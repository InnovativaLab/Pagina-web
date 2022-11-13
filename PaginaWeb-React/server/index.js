import coursesRouter from './routes/courses.routes.js'
import reserveRouter from './routes/reserve.routes.js'
import dataRouter from './routes/data.routes.js'
import userRouter from './routes/user.routes.js'
import filesRouter from './routes/files.routes.js'
import compression from 'compression'
import pino from 'express-pino-logger'
import bodyParser from 'body-parser'
import { PORT } from './config.js'
import express from 'express'

const app = express()
app.use(compression())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(pino())
// Configurar cabeceras y cors
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  // res.header('Accept-Encoding: gzip, compress, br')
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method')
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE, PATCH')
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE')
  next()
})

app.use('/api', filesRouter)
app.use('/api', userRouter)
app.use('/api', coursesRouter)
app.use('/api', reserveRouter)
app.use('/api', dataRouter)

app.use((req, res, next) => {
  res.status(404).json({
    message: 'Endpoint not found'
  })
})

app.listen(PORT, () =>
  console.log(`Es servidor se esta ejecutando en el puerto:${PORT}`)
)
