const db = require('../config/database'); // file koneksi db kamu
const bcrypt = require('bcrypt');

const User = {
  create: async (username, password) => {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const sql = 'INSERT INTO login (username, password) VALUES (?, ?)';
    return new Promise((resolve, reject) => {
      db.query(sql, [username, hashedPassword], (err, result) => {
        if (err) return reject(err);
        resolve(result);
      });
    });
  },

  findByUsername: (username) => {
    const sql = 'SELECT * FROM login WHERE username = ?';
    return new Promise((resolve, reject) => {
      db.query(sql, [username], (err, result) => {
        if (err) return reject(err);
        resolve(result[0]); // ambil 1 user
      });
    });
  }
};

module.exports = User;
