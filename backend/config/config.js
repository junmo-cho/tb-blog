const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  "development": {
    "username": "root",
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "host": process.env.HOST,
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "host": process.env.HOST,
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "host": process.env.HOST,
    "dialect": "mysql"
  }
}
