import {pool} from '../db.js'

export const getCourses = async (req,res)=> {
    try {
        const [result]=await pool.query('SELECT "Pong" AS result')
        res.json(result)
    } catch (error) {
        return res.status(500).json({
            message:'Something goes wrong'
        })
    }
}
export const getCourse = async (req,res)=> {
    try {
        res.json({message:"Hello world"})
    } catch (error) {
        return res.status(500).json({
            message:'Something goes wrong'
        })
    }
}
export const createCourse = async (req,res)=> {
    try {
        res.json({message:"Hello world"})
    } catch (error) {
        return res.status(500).json({
            message:'Something goes wrong'
        })
    }
}
export const updateCourse = async (req,res)=> {
    try {
        res.json({message:"Hello world"})
    } catch (error) {
        return res.status(500).json({
            message:'Something goes wrong'
        })
    }
}
export const deleteCourse = async (req,res)=> {
    try {
        res.json({message:"Hello world"})
    } catch (error) {
        return res.status(500).json({
            message:'Something goes wrong'
        })
    }
}