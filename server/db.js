import {Sequelize} from "sequelize";

 const sequelize = new Sequelize(
    process.env.POSTGRESS_NAME,
    process.env.POSTGRESS_USER,
    process.env.POSTGRESS_PASSWORD,
    {
        dialect: 'postgres',
        host: process.env.POSTGRESS_HOST,
        port: process.env.POSTGRESS_PORT
    }
)

export default sequelize