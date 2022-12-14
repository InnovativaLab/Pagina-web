import { pool } from '../db.js'

export const getDataNumReservas = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT COUNT(cursousuario.ID) AS NumeroDeReservas FROM coursesdb.cursousuario;')
    return res.json(rows[0])
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
    return res.json(rows[0])
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
    return res.json(rows[0])
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: 'Something goes wrong'
    })
  }
}
export const getDataCursos = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT curso.Id, curso.Titulo, CONCAT (curso.Categoria,", ", curso.Subcategoria) as Categorias,COUNT(curso.Id)AS NumeroDeReservas FROM coursesdb.cursousuario INNER JOIN coursesdb.curso On cursousuario.CursoID= curso.Id GROUP BY curso.Id ORDER BY NumeroDeReservas DESC; ')
    const numReservas = (await pool.query('SELECT COUNT(cursousuario.ID) AS NumeroDeReservas FROM coursesdb.cursousuario;'))[0][0].NumeroDeReservas
    Object.values(rows).map((element) => {
      element.NumeroDeReservas = Math.round((element.NumeroDeReservas / numReservas) * 10000) / 100
    })
    return res.json(rows)
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: 'Something goes wrong'
    })
  }
}
export const getDataAnalisis = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT cursousuario.Fecha, curso.Titulo, COUNT(curso.Titulo)AS NumeroDeReservas FROM coursesdb.cursousuario INNER JOIN coursesdb.curso On cursousuario.CursoID= curso.Id  group by curso.Titulo, cursousuario.fecha ORDER BY Fecha ASC; ')
    return res.json(rows)
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: 'Something goes wrong'
    })
  }
}
export const getNumReservasDeCurso = async (req, res) => {
  try {
    const { id } = req.params
    const [rows] = await pool.query('SELECT COUNT(cursousuario.ID) AS NumeroDeReservas FROM coursesdb.cursousuario WHERE cursoID=?;', [id])
    return res.json(rows[0])
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: 'Something goes wrong'
    })
  }
}
export const getReservasDeCursoPorTitulo = async (req, res) => {
  try {
    const { title } = req.params
    // console.log(title)
    const [rows] = await pool.query('SELECT COUNT(cursousuario.ID) AS NumeroDeReservas FROM coursesdb.cursousuario INNER JOIN coursesdb.curso ON CursoID=curso.Id WHERE Titulo=?;', [title])
    // console.log(rows)
    return res.json(rows[0])
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: 'Something goes wrong'
    })
  }
}
