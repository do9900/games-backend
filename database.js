const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'crud16'
});

connection.connect(err=>{
    if(err) throw err;
    console.log('Connected');
})


module.exports = connection;