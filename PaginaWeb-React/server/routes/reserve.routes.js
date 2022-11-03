import { Router } from 'express'
import { getReserve, createReserve, deleteReserve} from '../controllers/reserve.controller.js'

const router = Router()

router.get('/reserve/:NombreDeUsuario', getReserve)

router.post('/reserve', createReserve)

router.delete('/reserve/:id', deleteReserve)

export default router
