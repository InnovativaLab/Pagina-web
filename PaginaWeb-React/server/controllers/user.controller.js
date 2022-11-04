import { pool } from '../db.js'
import passwordHash from 'password-hash'
import { checkLogInData, checkSignInData } from '../utils/verication.js'

export const getUsers = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * from Usuario')
    res.json(rows)
  } catch (error) {
    return res.status(500).json({
      message: 'Something goes wrong'
    })
  }
}
export const getUser = async (req, res) => {
  try {
    const { Email } = req.params
    const { Contraseña } = req.body
    const result = checkLogInData(Email, Contraseña)
    if (result === true) {
      const dataUser = await pool.query(`SELECT usuario.NombreDeUsuario, usuario.Email, usuario.Nombre, usuario.Apellido, usuario.Genero, usuario.Contraseña, usuario.Preferencias, usuario.Estado, rolusuario.RolID, rol.Nombre as RolNombre, rolusuario.RolID as Permisos FROM coursesdb.usuario INNER JOIN rolusuario ON usuario.NombreDeUsuario=rolusuario.NombreDeUsuario
                                      INNER JOIN rol ON rolusuario.Rolid=rol.ID
                                      Where email=?;`, [Email])
      const user = dataUser[0][0]
      if (passwordHash.verify(Contraseña, user.Contraseña)) {
        const [rows] = await pool.query(`SELECT PermisoID, Nombre as PermisoNombre FROM coursesdb.permisorol
        INNER JOIN coursesdb.permiso ON permisorol.permisoID=permiso.ID
        Where RolID=?;`, [user.Permisos])
        user.Permisos = rows
        return res.json(user)
      }
      return res.status(500).json({
        message: 'Data incorrect'
      })
    } else {
      return res.status(500).json({
        message: result
      })
    }
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: 'Something goes wrong'
    })
  }
}
export const createUser = async (req, res) => {
  try {
    const { Nombre, Apellido, Genero, Contraseña, Email, NombreDeUsuario, Preferencias, Estado } = req.body
    const user = { NombreDeUsuario, Nombre, Apellido, Contraseña, Email, Preferencias: '', Estado: 'Sin verificar', Genero }
    const result = checkSignInData(user, Contraseña)
    if (result === true) {
      const hash = passwordHash.generate(Contraseña)
      const [rows] = await pool.query('INSERT INTO Usuario (Nombre, Apellido,Genero,Contraseña,Email,NombreDeUsuario,Preferencias,Estado) VALUES (?,?,?,?,?,?,?,?)', [Nombre, Apellido, Genero, hash, Email, NombreDeUsuario, Preferencias, Estado])
      const data = await pool.query('INSERT INTO rolusuario (RolID, NombreDeUsuario) VALUES (?,?)', [1, NombreDeUsuario])
      res.send({
        // id: rows.insertId,
        Nombre, Apellido, Genero, hash, Email, NombreDeUsuario, Preferencias, Estado
      })
    } else {
      return res.status(500).json({
        message: result
      })
    }
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: error.sqlMessage
    })
  }
}
export const updateUser = async (req, res) => {
  try {
    res.json({ message: 'Hello world' })
  } catch (error) {
    return res.status(500).json({
      message: 'Something goes wrong'
    })
  }
}
export const deleteUser = async (req, res) => {
  try {
    const [result] = await pool.query('DELETE from Usuario WHERE NombreDeUsuario=?;', [req.params.NombreDeUsuario])
    if (result.affectedRows <= 0) return res.status(404).json({ message: 'User not found' })
    res.sendStatus(204)
  } catch (error) {
    return res.status(500).json({
      message: error.sqlMessage
    })
  }
}
