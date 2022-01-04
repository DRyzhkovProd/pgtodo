import {Sequelize} from "sequelize";
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    '123',
    {
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: process.env.POSTGRESS_PORT
    }
)

export default sequelize