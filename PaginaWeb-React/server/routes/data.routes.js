import { Router } from 'express'
import { getDataNumReservas, getDataNumCursos, getDataNumAlumnos,getDataCursos} from '../controllers/data.controller.js'

const router = Router()

router.post('/data/numReserves', getDataNumReservas)

router.post('/data/numCourses', getDataNumCursos)

router.post('/data/numStudents', getDataNumAlumnos)

router.post('/data/dataCourses', getDataCursos)

export default router
