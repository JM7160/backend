const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost', // 또는 RDS 주소 등
  user: 'your_user',
  password: 'your_password',
  database: 'your_database',
});

module.exports = pool.promise(); // async/await 사용을 위해
    