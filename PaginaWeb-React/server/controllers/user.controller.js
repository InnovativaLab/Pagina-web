import {pool} from '../db.js'

export const getUsers = async (req,res)=> {
    try {
        res.json({message:"Hello world"})
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
        res.json({message:"Hello world"})
    } catch (error) {
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
        res.json({message:"Hello world"})
    } catch (error) {
        return res.status(500).json({
            message:'Something goes wrong'
        })
    }
}
