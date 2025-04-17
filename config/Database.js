import { Sequelize } from "sequelize";

const db = new Sequelize('crud_db', 'root', 'root', {
    host: '127.0.0.1',
    dialect: 'mysql',
    port: 8889,
}
);
// const db = mysql.createConnection({
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
// });

export default db;