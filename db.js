const mysql = require('mysql');
require('dotenv').config();

// Create a MySQL connection
const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE_NAME,
  // port: 3306
});

// Connect to the database
try {
  connection.connect();
  console.log('Connection Established!')
} catch (error) {
    console.log(error)
}


module.exports = connection