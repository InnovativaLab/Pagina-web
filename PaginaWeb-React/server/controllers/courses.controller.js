import { pool } from '../db.js'

export const getCourses = async (req, res) => {
  try {
    const {Titulo, Cantidad}= req.body;
    let query =""
    if(Titulo===undefined&&Cantidad===undefined){
      query=`SELECT * from Curso;`
    }
    else if(Titulo!==undefined&&Cantidad!==undefined){
      query=`SELECT * from Curso Where Titulo Like "%${Titulo}%";`
    }
    else{
      query=`SELECT * FROM coursesdb.Curso LIMIT ${Cantidad};`
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
    res.json({ message: 'Hello world' })
  } catch (error) {
    return res.status(500).json({
      message: 'Something goes wrong'
    })
  }
}
export const deleteCourse = async (req, res) => {
  try {
    const { id } = req.params
    //const [result] = await pool.query('UPDATE Curso SET Estado=IFNULL("Sin publicar",Estado) WHERE id=?;', [id])
    const [result] = await pool.query('DELETE from Curso WHERE id=?;', [id])
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
