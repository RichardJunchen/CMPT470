var mysql = require('mysql');

var pool = mysql.createPool({
    host: "db470.cqkqwlvxkuct.us-west-2.rds.amazonaws.com",
    user: "admin",
    password: "adminpassword",
    port: 3306,
    database: "db470", 
});


// pool.connect(function(err){
//     if (err){
//         console.log('ERROR: '+err.stack);
//         return;
//     }
//     console.log('CONNECTION SUCCESSFULL');
//     // var sql = 'CREATE TABLE recipes (name VARCHAR(255), ingredients VARCHAR(255))';
//     var sql = 'INSERT INTO recipes (name,ingredients) VALUES ("rec2","sugar")';
//     // var sql = 'DROP TABLE recipes';
//     con.query(sql, function (err, result) {
//         if (err) throw err;
//         console.log("Query executed");
//     });
// });
exports.pool = pool;
// con.end();