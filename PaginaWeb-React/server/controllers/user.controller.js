import {pool} from '../db.js'

export const getUsers = async (req,res)=> {
    try {
        const [rows]=await pool.query('SELECT * from Usuario')
        res.json({rows})
    } catch (error) {
        return res.status(500).json({
            message:'Something goes wrong'
        })
    }
}
export const getUser = async (req,res)=> {
    try {
        res.json({message:"Hello world"})
    } catch (error) {
        return res.status(500).json({
            message:'Something goes wrong'
        })
    }
}
export const createUser = async (req,res)=> {
    try {
        const {Nombre, Apellido,Genero,Contraseña,Email,NombreDeUsuario,Preferencias,Estado}= req.body
        console.log(req.body)
        const [rows]=await pool.query('INSERT INTO Usuario (Nombre, Apellido,Genero,Contraseña,Email,NombreDeUsuario,Preferencias,Estado) VALUES (?,?,?,?,?,?,?,?)',[Nombre, Apellido,Genero,Contraseña,Email,NombreDeUsuario,Preferencias,Estado])
        res.send({
            //id: rows.insertId,
            Nombre,
            Apellido,
            Genero,
            Contraseña,
            Email,
            NombreDeUsuario,
            Preferencias,
            Estado,
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message:'Something goes wrong'
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
            message:'Something goes wrong'
        })
    }
}
