import {pool} from '../db.js'
import passwordHash from "password-hash"

export const getUsers = async (req,res)=> {
    try {
        const [rows]=await pool.query('SELECT * from Usuario')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message:'Something goes wrong'
        })
    }
}
export const getUser = async (req,res)=> {
    try {
        const {Email}= req.params
        const {Contraseña}= req.body
        const [rows]=await pool.query('SELECT * from Usuario WHERE Email=? ',[Email])
        if(passwordHash.verify(Contraseña,rows[0].Contraseña)) return res.json(rows)
        return res.status(500).json({
            message:'Data incorrect'
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message:'Something goes wrong'
        })
    }
}
export const createUser = async (req,res)=> {
    try {
        const {Nombre, Apellido,Genero,Contraseña,Email,NombreDeUsuario,Preferencias,Estado}= req.body
        const hash= passwordHash.generate(Contraseña);
        const [rows]=await pool.query('INSERT INTO Usuario (Nombre, Apellido,Genero,Contraseña,Email,NombreDeUsuario,Preferencias,Estado) VALUES (?,?,?,?,?,?,?,?)',[Nombre, Apellido,Genero,hash,Email,NombreDeUsuario,Preferencias,Estado])
        res.send({
            //id: rows.insertId,
            Nombre,Apellido,Genero,hash,Email,NombreDeUsuario,Preferencias,Estado,
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message:error.sqlMessage
        })
    }
}
export const updateUser = async (req,res)=> {
    try {
        res.json({message:"Hello world"})
    } catch (error) {
        return res.status(500).json({
            message:'Something goes wrong'
        })
    }
}
export const deleteUser = async (req,res)=> {
    try {
        const [result]=await pool.query('DELETE from Usuario WHERE NombreDeUsuario=?;',[req.params.NombreDeUsuario])
        if(result.affectedRows<=0)return res.status(404).json({message:'User not found'})
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message:error.sqlMessage
        })
    }
}
