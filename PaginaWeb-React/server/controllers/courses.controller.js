import { pool } from '../db.js'

export const getCourses = async (req, res) => {
  try {
    const { Titulo, Cantidad } = req.body
    let query = ''
    if (Titulo === undefined && Cantidad === undefined) {
      query = 'SELECT * from Curso WHERE curso.Estado="Aprobado";'
    } else if (Titulo !== undefined && Cantidad === undefined) {
      query = `SELECT * from Curso Where Titulo Like "%${Titulo}%" AND Estado="Aprobado";`
    } else {
      query = `SELECT * FROM coursesdb.Curso WHERE Estado="Aprobado" LIMIT ${Cantidad} ;`
    }
    const [rows] = await pool.query(query)
    res.json(rows)
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: 'Something goes wrong'
    })
  }
}

export const getCourse = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * from Curso WHERE id=?;', [req.params.id])
    if (rows.length <= 0) return res.status(404).json({ message: 'Course not found' })
    res.json(rows[0])
  } catch (error) {
    return res.status(500).json({
      message: 'Something goes wrong'
    })
  }
}
export const createCourse = async (req, res) => {
  try {
    const { Titulo, Subtitulo, Nivel, Categoria, Subcategoria, Descripcion, Estado, Idioma, TiempoDePublicacion, PrecioEnPesos, PrecioEnDolares, ImagenDePortada, VideoPromocional, MensajeDeBienvenida, MensajeDeFelicitaciones } = req.body
    const [rows] = await pool.query('INSERT INTO Curso (Titulo,Subtitulo,Nivel,Categoria,Subcategoria,Descripcion,Estado,Idioma,TiempoDePublicacion,PrecioEnPesos,PrecioEnDolares,ImagenDePortada,VideoPromocional,MensajeDeBienvenida,MensajeDeFelicitaciones) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [Titulo, Subtitulo, Nivel, Categoria, Subcategoria, Descripcion, Estado, Idioma, TiempoDePublicacion, PrecioEnPesos, PrecioEnDolares, ImagenDePortada, VideoPromocional, MensajeDeBienvenida, MensajeDeFelicitaciones])
    res.send({
      id: rows.insertId,
      Titulo,
      Subtitulo,
      Nivel,
      Categoria,
      Subcategoria,
      Descripcion,
      Estado,
      Idioma,
      TiempoDePublicacion,
      PrecioEnPesos,
      PrecioEnDolares,
      ImagenDePortada,
      VideoPromocional,
      MensajeDeBienvenida,
      MensajeDeFelicitaciones
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: 'Something goes wrong'
    })
  }
}
export const updateCourse = async (req, res) => {
  try {
    const { id } = req.params
    const user = req.body
    console.log(user.Titulo)
    console.log(parseInt(id))
    // const [rows] = await pool.query(`UPDATE Curso SET Titulo="dfs" Where id=16;`)
    const [rows] = await pool.query('UPDATE Curso SET Titulo=?,Subtitulo=?,Nivel=?,Categoria=?,Subcategoria=?,Descripcion=?,Estado=?,Idioma=?,TiempoDePublicacion=?,PrecioEnPesos=?,PrecioEnDolares=?,ImagenDePortada=?,VideoPromocional=?,MensajeDeBienvenida=?,MensajeDeFelicitaciones=? Where Id=?;', [user.Titulo, user.Subtitulo, user.Nivel, user.Categoria, user.Subcategoria, user.Descripcion, user.Estado, user.Idioma, user.TiempoDePublicacion, user.PrecioEnPesos, user.PrecioEnDolares, user.ImagenDePortada, user.VideoPromocional, user.MensajeDeBienvenida, user.MensajeDeFelicitaciones, id])
    res.send(rows)
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: 'Something goes wrong'
    })
  }
}
export const changeStateCourse = async (req, res) => {
  try {
    const { id } = req.params
    const { Estado } = req.body
    console.log(Estado)
    const [result] = await pool.query('UPDATE Curso SET Estado=IFNULL(?,Estado) WHERE id=?;', [Estado, id])
    // const [result] = await pool.query('DELETE from Curso WHERE id=?;', [id])
    if (result.affectedRows <= 0) return res.status(404).json({ message: 'Course not found' })
    const [rows] = await pool.query('SELECT * from Curso WHERE id=?;', [id])
    res.json(rows[0])
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: 'Something goes wrong'
    })
  }
}
export const getRemoveCourses = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * from Curso WHERE curso.Estado='Retirado'")
    res.json(rows)
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: 'Something goes wrong'
    })
  }
}
