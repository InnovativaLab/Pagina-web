import pino from 'express-pino-logger'
import bodyParser from 'body-parser'
import * as dotenv from 'dotenv'
import express from 'express'

const app = express()
const PORT = 3001
dotenv.config()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(pino())

app.get('/api', async (req, res, next) => {
  try {
    res.header('Access-Control-Allow-Origin', '*') // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    const validUser = 'franco'
    const course = {
      title: 'Curso Arduino',
      tags: ['Arduino', 'Tinkercad', 'Robotica'],
      text: 'En este cursos aprenderas los conceptos basicos de Arduino, electronica basica y sobre simuladores de robotica con el objetivo de que al finalizar el mismo seas capaz de crear tu propio robot.'
    }
    const user = req.query.user
    if (user === validUser) {
      res.send(course)
    } else {
      res.status(401).send('El usuario no tiene ese curso asignado')
    }
  } catch (err) {
    console.log(err)
    res.status(401).send('Hubo un error al reproducir el mensaje.')
  }
})

app.listen(PORT, () =>
  console.log(`Es servidor se esta ejecutando en el puerto:${PORT}`)
)
