import express from 'express'
import sequelize from "./db.js";
import * as models from './models/models.js'
import cors from 'cors'
import router from "./routes/index.js";
import errorMiddleware from "./middlewares/errorMiddleware.js";

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api', router)
app.use(errorMiddleware)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(process.env.PORT, () => console.log(`Server started on port ${process.env.PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()

console.log(process.env.PORT)