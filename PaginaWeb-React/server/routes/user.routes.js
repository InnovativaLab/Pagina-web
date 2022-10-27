import { Router } from 'express'
import { getUser, getUsers, createUser, updateUser, deleteUser } from '../controllers/user.controller.js'

const router = Router()

router.get('/user', getUsers)

router.post('/user/:Email', getUser)

router.post('/user', createUser)

router.patch('/user/:id', updateUser)

router.delete('/user/:NombreDeUsuario', deleteUser)

export default router
