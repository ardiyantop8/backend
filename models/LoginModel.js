// const db = require('../config/database'); // file koneksi db kamu
// const bcrypt = require('bcrypt');

// const Login = {
//   create: async (username, password) => {
//     const saltRounds = 10;
//     const hashedPassword = await bcrypt.hash(password, saltRounds);

//     const sql = 'INSERT INTO login (username, password) VALUES (?, ?)';
//     return new Promise((resolve, reject) => {
//       db.query(sql, [username, hashedPassword], (err, result) => {
//         if (err) return reject(err);
//         resolve(result);
//       });
//     });
//   },

//   findByUsername: (username) => {
//     const sql = 'SELECT * FROM login WHERE username = ?';
//     return new Promise((resolve, reject) => {
//       db.query(sql, [username], (err, result) => {
//         if (err) return reject(err);
//         resolve(result[0]); // ambil 1 user
//       });
//     });
//   }
// };

// module.exports = Login;




import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import bcrypt from "bcrypt"; // <-- Tambahkan bcrypt

const { DataTypes } = Sequelize;

const Login = db.define(
    'login',
    {
        username: DataTypes.STRING,
        password: DataTypes.STRING,
    },
    {
        freezeTableName: true,
        timestamps: false,
        hooks: {
            beforeCreate: async (login, options) => {
                if (login.password) {
                    const salt = await bcrypt.genSalt(10);
                    login.password = await bcrypt.hash(login.password, salt);
                }
            },
            beforeUpdate: async (login, options) => {
                if (login.changed('password')) { // hanya encrypt kalau password berubah
                    const salt = await bcrypt.genSalt(10);
                    login.password = await bcrypt.hash(login.password, salt);
                }
            },
        },
    }
);

export default Login;

(async () => {
    await db.sync();
})();