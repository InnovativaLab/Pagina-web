import {Router} from 'express'
import {getCourses,getCourse,createCourse,updateCourse,deleteCourse} from '../controllers/courses.controller.js'

const router = Router()

router.get('/courses',getCourses)

router.get('/courses/:id',getCourse)

router.post('/courses',createCourse)

router.patch('/courses/:id',updateCourse)

router.delete('/courses/:id',deleteCourse)

export default router