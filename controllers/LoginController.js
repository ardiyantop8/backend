// const Login = require('../models/LoginModel');

// const LoginController = {
//   register: async (req, res) => {
//     try {
//       const { username, password } = req.body;

//       if (!username || !password) {
//         return res.status(400).json({ message: 'Username dan password harus diisi.' });
//       }

//       await Login.create(username, password);

//       res.status(201).json({ message: 'User berhasil didaftarkan.' });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Gagal mendaftarkan user.' });
//     }
//   }
// };

// module.exports = LoginController;


import Login from "../models/LoginModel.js";
import moment from "moment-timezone"; // install moment-timezone
export const createUserLogin = async (req, res) => {
    try {
        const jakartaTime = moment().tz("Asia/Jakarta").format(); // ambil waktu Jakarta
        await Login.create({
            ...req.body,
            createdAt: jakartaTime, // set createdAt
            updatedAt: jakartaTime // set updatedAt
        });
        res.status(201).json({msg: "user login has been created"});
    } catch (error) {
        console.log(error.message);
    }
}