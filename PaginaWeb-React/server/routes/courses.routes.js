import { Router } from 'express'
import { getCourses, getCourse, createCourse, updateCourse, changeStateCourse, getRemoveCourses } from '../controllers/courses.controller.js'

const router = Router()

router.get('/courses/:id', getCourse)

router.post('/courses/get', getCourses)

router.get('/removeCourses', getRemoveCourses)

router.post('/saveCourses', createCourse)

router.patch('/courses/:id', updateCourse)

router.post('/changeStateCourse/:id', changeStateCourse)

export default router
