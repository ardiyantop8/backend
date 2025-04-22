const User = require('../models/UserModel');

const LoginController = {
  register: async (req, res) => {
    try {
      const { username, password } = req.body;

      if (!username || !password) {
        return res.status(400).json({ message: 'Username dan password harus diisi.' });
      }

      await User.create(username, password);

      res.status(201).json({ message: 'User berhasil didaftarkan.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Gagal mendaftarkan user.' });
    }
  }
};

module.exports = LoginController;
