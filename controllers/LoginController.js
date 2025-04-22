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
export const createUserLogin = async (req, res) => {
    try {
        await Login.create({
            ...req.body,
        });
        res.status(201).json({msg: "user login has been created"});
    } catch (error) {
        console.log(error.message);
    }
}