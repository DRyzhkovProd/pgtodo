import express from 'express'
import dotenv from 'dotenv'
import sequelize from "./db.js";
import * as models from './models/models.js'
import cors from 'cors'
dotenv.config()

const PORT= process.env.PORT || 5000
const app = express()
app.use(cors())
app.use(express.json())

const start = async () => {
    try{
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, ()=> console.log(`server started on ${PORT} port`))
    } catch (e) {}
}
