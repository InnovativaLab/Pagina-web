import {createPool} from 'mysql2/promise'
import {DB_HOST,DB_PORT,DB_USER,DB_PASSWORD, DB_DATABASE} from './config.js'

export const pool=createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: Number(DB_PORT),
    database: DB_DATABASE
})