import { Router } from 'express'
import { getCourses, getCourse, createCourse, updateCourse, changeStateCourse } from '../controllers/courses.controller.js'

const router = Router()

router.get('/courses/:id', getCourse)

router.post('/courses/get', getCourses)

router.post('/saveCourses', createCourse)

router.patch('/courses/:id', updateCourse)

router.delete('/changeStateCourse/:id', changeStateCourse)

export default router
