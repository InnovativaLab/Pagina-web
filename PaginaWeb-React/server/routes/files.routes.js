import { Router } from 'express'
import multer from 'multer'
import mimeTypes from 'mime-types'

const router = Router()

const storage = multer.diskStorage({
  destination: './server/uploads/',
  filename: (req, file, cb) => {
    cb('', `${Date.now()}.${mimeTypes.extension(file.mimetype)}`)
  }
})

const upload = multer({
  storage
})
router.post('/saveFile', upload.single('profileImg'), async (req, res) => {
    try {
      console.log('Se guardo el archivo')
      res.json({
          message: 'Ok'
        })
    } catch (error) {
      console.log(error)
      return res.status(500).json({
        message: 'Something goes wrong'
      })
    }
  })

export default router
