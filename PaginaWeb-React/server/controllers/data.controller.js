import { pool } from '../db.js'

export const getDataNumReservas = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT COUNT(cursousuario.ID) AS NumeroDeReservas FROM coursesdb.cursousuario;')
    return res.json(rows)
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: 'Something goes wrong'
    })
  }
}
export const getDataNumCursos = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT COUNT(curso.id) AS NumeroDeCursos FROM coursesdb.curso;')
    return res.json(rows)
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: 'Something goes wrong'
    })
  }
}
export const getDataNumAlumnos = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT COUNT(DISTINCT cursousuario.NombreDeUsuario) AS NumeroDeAlumnos FROM coursesdb.cursousuario;')
    return res.json(rows)
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: 'Something goes wrong'
    })
  }
}
export const getDataCursos= async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT curso.Id, curso.Titulo, CONCAT (curso.Categoria,", ", curso.Subcategoria) as Categorias,COUNT(curso.Id)AS NumeroDeReservas FROM coursesdb.cursousuario INNER JOIN coursesdb.curso On cursousuario.CursoID= curso.Id GROUP BY curso.Id ORDER BY NumeroDeReservas DESC; ')
    return res.json(rows)
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: 'Something goes wrong'
    })
  }
}