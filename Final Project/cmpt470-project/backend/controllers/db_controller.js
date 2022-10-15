var mysql = require('../mysqlcon').pool;

exports.insertFreshDB = function (req, res, next) {
    // mysql.query('SELECT * FROM recipes', function (err, result) {})
    mysql.getConnection((err, connection) => {
        if(err) throw err;
        console.log('connected as id ' + connection.threadId);
        connection.query('LOAD DATA LOCAL INFILE ? INTO TABLE newrecipe FIELDS TERMINATED BY ? ENCLOSED BY ? LINES TERMINATED BY ? IGNORE 1 ROWS (name, id, minutes, tags, n_steps, steps, description, ingredients, n_ingredients, calories, total_fat, sugar, sodium, protein, saturated_fat, carbohydrates);' ,['C:/Users/tjsan/Desktop/sfu/cmpt 470/cmpt470-project/backend/data_manipulation/cleanedraw.csv', ',', '"','\n'], (err, results,fields) => {
            connection.release(); // return the connection to pool
            if(err) throw err;
            var rows = JSON.parse(JSON.stringify(results));
            console.log('The data from users table are: \n', rows );
            // res.render('recipes',{data:rows})
        });
    });
    res.send('Check console log please.');
}

// Comment & Un-comment accordingly to create the appropriate table. NOTE: All the tables have already been created and are hosted on aws.
exports.insertFreshTable = function (req, res, next) {
    mysql.getConnection((err, connection) => {
        if(err) throw err;
        console.log('connected as id ' + connection.threadId);
        // var table_name = 'ingredientlist'
        // var params = '(Ingredient VARCHAR(255))'
        connection.query('CREATE TABLE comments (id VARCHAR(255), body TEXT, username VARCHAR(255), userID VARCHAR(255), parentID VARCHAR(255), createdAt VARCHAR(255))', (err, results,fields) => {
        // connection.query('CREATE TABLE recipe (id INT, name VARCHAR(255), description TEXT, ingredients TEXT, ingredients_raw_str TEXT, serving_size VARCHAR(255), servings SMALLINT, steps TEXT, tags TEXT, search_terms TEXT)', (err, results,fields) => {
            // connection.query('CREATE TABLE newrecipe (name VARCHAR(255), id INT, minutes INT, tags TEXT, n_steps INT, steps TEXT, description TEXT, ingredients TEXT, n_ingredients INT, calories FLOAT, total_fat FLOAT, sugar FLOAT, sodium FLOAT, protein FLOAT, saturated_fat FLOAT, carbohydrates FLOAT)', (err, results,fields) => {
            connection.release(); // return the connection to pool
            if(err) throw err;
            var rows = JSON.parse(JSON.stringify(results));
            console.log('The data from users table are: \n', rows );
            // res.render('recipes',{data:rows})
        });
    });
    res.send('Check console log please.');
}

exports.insertIngs = function (req, res, next) {
    // mysql.query('SELECT * FROM recipes', function (err, result) {})
    mysql.getConnection((err, connection) => {
        if(err) throw err;
        console.log('connected as id ' + connection.threadId);
        // var table_name = 'ingredientlist'
        // var params = '(Ingredient VARCHAR(255))'
        connection.query('LOAD DATA LOCAL INFILE ? INTO TABLE ingredientlist FIELDS TERMINATED BY ? ENCLOSED BY ? LINES TERMINATED BY ? IGNORE 1 ROWS (ingredients);' ,['C:/Users/tjsan/Desktop/sfu/cmpt 470/New folder/cmpt470-project/backend/data_manipulation/ingredient_list.csv', ',', '"', '\n'], (err, results,fields) => {
            connection.release(); // return the connection to pool
            if(err) throw err;
            var rows = JSON.parse(JSON.stringify(results));
            console.log('The data from users table are: \n', rows );
            // res.render('recipes',{data:rows})
        });
    });
    res.send('Check console log please.');
}

// TODO: if ingredient map needed modify.
exports.insertRFI = function (req, res, next) {
    // mysql.query('SELECT * FROM recipes', function (err, result) {})
    mysql.getConnection((err, connection) => {
        if(err) throw err;
        console.log('connected as id ' + connection.threadId);
        // var table_name = 'ingredientlist'
        // var params = '(Ingredient VARCHAR(255))'
        connection.query('LOAD DATA LOCAL INFILE ? INTO TABLE ingredientmap FIELDS TERMINATED BY ? ENCLOSED BY ? LINES TERMINATED BY ? IGNORE 1 ROWS (id, ingredients);' ,['C:/Users/tjsan/Desktop/ingredientmap.csv', ',', '"', '\n'], (err, results,fields) => {
            connection.release(); // return the connection to pool
            if(err) throw err;
            var rows = JSON.parse(JSON.stringify(results));
            console.log('The data from users table are: \n', rows );
            // res.render('recipes',{data:rows})
        });
    });
    res.send('Check console log please.');
}
