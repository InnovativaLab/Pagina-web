import { Router } from 'express'
import { getDataNumReservas, getDataNumCursos, getDataNumAlumnos, getDataCursos, getDataAnalisis, getNumReservasDeCurso, getReservasDeCursoPorTitulo } from '../controllers/data.controller.js'

const router = Router()

router.post('/data/numReserves', getDataNumReservas)

router.post('/data/numCourses', getDataNumCursos)

router.post('/data/numStudents', getDataNumAlumnos)

router.post('/data/dataCourses', getDataCursos)

router.post('/data/dataAnalisis', getDataAnalisis)

router.post('/data/ReservasDeCurso/:id', getNumReservasDeCurso)

router.post('/data/ReservasDeCursoPorTitulo/:title', getReservasDeCursoPorTitulo)

export default router
