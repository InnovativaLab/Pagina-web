import { Router } from 'express'
import { setSaveFile } from '../controllers/files.controller.js'
import multer from'multer'
import mimeTypes from'mime-types'

const router = Router()

const storage = multer.diskStorage({
destination:'./server/uploads/',
filename:(req,file,cb)=>{
    cb("",`${Date.now()}.${mimeTypes.extension(file.mimetype)}`)
}
})

const upload = multer({
    storage:storage
})
router.post('/saveFile', upload.single('profileImg'), setSaveFile)

export default router
