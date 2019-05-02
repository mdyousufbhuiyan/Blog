const mysql = require('mysql')

var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'yousuf',
    password: '123456',
    database: 'blog'
});
mysqlConnection.connect();


module.exports = mysqlConnection;