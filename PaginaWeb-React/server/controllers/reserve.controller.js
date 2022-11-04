import { pool } from '../db.js'

export const getReserve = async (req, res) => {
  try {
    const { NombreDeUsuario } = req.params
    if (NombreDeUsuario !== undefined) {
      const [rows] = await pool.query('SELECT curso.Id, curso.Titulo, curso.Subtitulo, curso.Nivel, curso.Categoria, curso.Subcategoria, curso.Descripcion, curso.Estado, curso.Idioma, curso.TiempoDePublicacion, curso.PrecioEnPesos, curso.PrecioEnDolares, curso.ImagenDePortada, curso.MensajeDeBienvenida, curso.MensajeDeFelicitaciones FROM coursesdb.cursousuario INNER JOIN curso On cursousuario.CursoID= curso.Id where cursousuario.NombreDeUsuario =?;', [NombreDeUsuario])
      return res.json(rows)
    } else {
      return res.status(500).json({
        message: 'Data incorrect'
      })
    }
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: 'Something goes wrong'
    })
  }
}

export const createReserve = async (req, res) => {
  try {
    const { CursoId, NombreDeUsuario } = req.body
    const fecha = new Date(Date.now())
    const año= fecha.getFullYear()
    const mes= fecha.getMonth()
    const dia= fecha.getDate()
    let date = `${año}-${mes}-${dia}`
    const [rows] = await pool.query('INSERT INTO coursesdb.cursousuario (CursoID,NombreDeUsuario,Fecha) VALUES (?,?,?);', [CursoId, NombreDeUsuario,date])
    return res.send(rows)
  }
  catch (error) {
    console.log(error)
    return res.status(500).json({
      message: 'Something goes wrong'
    })
  }
}
export const deleteReserve = async (req, res) => {
  try {
    const { Id } = req.params
    const [rows] = await pool.query('DELETE FROM coursesdb.cursousuario where cursousuario.Id=?;', [Id])
    return res.send(rows)
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: 'Something goes wrong'
    })
  }
}
