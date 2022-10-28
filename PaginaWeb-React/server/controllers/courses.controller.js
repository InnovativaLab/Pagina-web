import { pool } from '../db.js'

export const getCourses = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * from Curso;')
    res.json(rows)
  } catch (error) {
    return res.status(500).json({
      message: 'Something goes wrong'
    })
  }
}
export const getCourse = async (req, res) => {
  try {
    res.json({ message: 'Hello world' })
  } catch (error) {
    return res.status(500).json({
      message: 'Something goes wrong'
    })
  }
}
export const createCourse = async (req, res) => {
  try {
    const { Titulo,Subtitulo,Nivel,Categoria,Subcategoria,Descripcion,Estado,Idioma,TiempoDePublicacion,PrecioEnPesos,PrecioEnDolares,ImagenDePortada,VideoPromocional,MensajeDeBienvenida,MensajeDeFelicitaciones} = req.body
    const [rows] = await pool.query('INSERT INTO Curso (Titulo,Subtitulo,Nivel,Categoria,Subcategoria,Descripcion,Estado,Idioma,TiempoDePublicacion,PrecioEnPesos,PrecioEnDolares,ImagenDePortada,VideoPromocional,MensajeDeBienvenida,MensajeDeFelicitaciones) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [Titulo,Subtitulo,Nivel,Categoria,Subcategoria,Descripcion,Estado,Idioma,TiempoDePublicacion,PrecioEnPesos,PrecioEnDolares,ImagenDePortada,VideoPromocional,MensajeDeBienvenida,MensajeDeFelicitaciones])
    res.send({
      id: rows.insertId,
      Titulo,Subtitulo,Nivel,Categoria,Subcategoria,Descripcion,Estado,Idioma,TiempoDePublicacion,PrecioEnPesos,PrecioEnDolares,ImagenDePortada,VideoPromocional,MensajeDeBienvenida,MensajeDeFelicitaciones
    })
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'Something goes wrong'
    })
  }
}
export const updateCourse = async (req, res) => {
  try {
    res.json({ message: 'Hello world' })
  } catch (error) {
    return res.status(500).json({
      message: 'Something goes wrong'
    })
  }
}
export const deleteCourse = async (req, res) => {
  try {
    res.json({ message: 'Hello world' })
  } catch (error) {
    return res.status(500).json({
      message: 'Something goes wrong'
    })
  }
}
