var mysql = require('../mysqlcon').pool;
const fs = require('fs');
const cheerio = require('cheerio');
const puppeteer = require("puppeteer");
var request = require("request");

// GET 0.0.0.0:3001/recipes/ with all infomation
exports.getAll = function (req, res, next) {
    mysql.getConnection((err, connection) => {
        if (err) throw err;
        // connection.query('SELECT * FROM recipe LIMIT 18', (err, results,fields) => {
        connection.query('SELECT * FROM newrecipe LIMIT 18', (err, results,fields) => {
            if(err) throw err;
            res.json(results); // sent random 18 rows instead of senting the entire database
            connection.release(); // return the connection to pool
        });
    });
}

// POST 0.0.0.0:3001/recipes/search/recipes w/ request body {"recipeName":"Chicken"}
exports.searchRecipes = function (req, res, next) {
    var recipeName = req.body.recipeName;
    console.log(recipeName);
    mysql.getConnection((err, connection) => {
        if (err) throw err;
        connection.query('SELECT * FROM newrecipe WHERE LOWER(name) LIKE ? LIMIT 10;', ['%' + recipeName + '%'], (err, results,fields) => {
            if(err) throw err;
            res.json(results);
            console.log(results);
            connection.release(); // return the connection to pool
        });
    });
}

// POST 0.0.0.0:3001/recipes/search/ingredients?ing=example where example is name of ingredient
exports.searchIngredients = function (req, res, next) {
    var ing = '%' + req.body.ing + '%';
    mysql.getConnection((err, connection) => {
        if (err) throw err;
        connection.query('SELECT * FROM ingredientlist WHERE ingredients LIKE ? ORDER BY LOCATE(?, ingredients) LIMIT 10;', [ing, ing], (err, results,fields) => {
            if(err) throw err;
            res.json(results);
            connection.release(); // return the connection to pool
        });
    });
//    res.send([{"id": 232076},{"id": 232097}]); //test data for now
}

// GET 0.0.0.0:3001/recipes/:id
// example: GET 0.0.0.0:3001/recipes/96313
exports.getOne = function (req, res, next) {
    mysql.getConnection((err, connection) => {
        if (err) throw err;
        connection.query('SELECT * FROM newrecipe WHERE id=? LIMIT 1;', [req.params.id], (err, results,fields) => {
            if(err) throw err;
            res.json(results);
            connection.release(); // return the connection to pool
        });
    });
}

exports.getOneImage = async function (req, res, next) {
    var recipeid = '-'+req.params.id;
    let recipenamepromise = new Promise((resolve,reject) =>{
        mysql.getConnection((err, connection) => {
            if (err) throw err;
            connection.query('SELECT name FROM newrecipe WHERE id=? LIMIT 1;', [req.params.id], (err, results,fields) => {
                if(err) throw err;
                const result = Object.values(JSON.parse(JSON.stringify(results)));
                resolve(result);
                // res.json(results);
                connection.release(); // return the connection to pool
            });
        });
    });
    let recipename = await recipenamepromise;
    recipename = String(recipename[0].name);
    // console.log(recipename);
    recipename = recipename.replace(/ +/g, '-');
    const recipeurl = 'https://www.food.com/recipe/'+recipename+recipeid;

    (async () => {
        try {
            const browser = await puppeteer.launch({headless: true,
                args: ['--no-sandbox']});
            const page = await browser.newPage();

            await page.goto(recipeurl, {"waitUntil" : "load"});
            console.log("page has been loaded!");
            const imgSrcs = await page.evaluate(() => {
                const srcs = Array.from(
                    document.querySelectorAll(".recipe-image__img")
                ).map((image) => image.getAttribute("data-src"));
                return srcs;
            });
            console.log("Page has been evaluated!");
        const imgsources = JSON.stringify(imgSrcs);
        const matches = imgsources.match(/"(.*?)"/);
        console.log(matches[0]);
        // res.send(imgsources);
        res.json(matches[0]);

        } catch (error) {
            console.log(error);
        }
        })();

}

// GET 0.0.0.0:3001/recipes/search/rfi w/ request body {"inglist":"Chicken,tomatoes,eggs"}
exports.postRFI = function (req, res, next) {
    ingredients = req.body.inglist;
    console.log(ingredients);
    if (req.body.inglist.length >= 2) {
        ingredients = req.body.inglist.replace(',','%\' AND ingredients LIKE \'%');
    }
    console.log(ingredients)
    mysql.getConnection((err, connection) => {
        if (err) throw err;
        connection.query('SELECT DISTINCT * FROM newrecipe WHERE ingredients LIKE \'%' + ingredients + '%\' LIMIT 10;', (err, results,fields) => {
            if(err) throw err;
            res.json(results);
            connection.release(); // return the connection to pool
        });
    });
}

// GET 0.0.0.0:3001/recipes/search/rfi/:ings w/ params
exports.getRFI = function (req, res, next) {
    ingredients = req.params.ings
    mysql.getConnection((err, connection) => {
        if (err) throw err;
        connection.query('SELECT DISTINCT * FROM newrecipe WHERE ingredients LIKE ? LIMIT 10;', ['%' + ingredients + '%'], (err, results,fields) => {
            if(err) throw err;
            res.json(results);
            connection.release(); // return the connection to pool
        });
    });
}


// GET 0.0.0.0:3001/recipes/comments
exports.getComments = function (req, res, next) {
    mysql.getConnection((err, connection) => {
        if (err) throw err;
        connection.query('SELECT * FROM comments', (err, results,fields) => {
            if(err) throw err;
            res.json(results);
            connection.release(); // return the connection to pool
        });
    });
}


// POST 0.0.0.0:3001/recipes/insertcomment w/ request body {body:"abc", id = "123", parentID = '234', ...}
exports.insertComment = function (req, res, next) {
    body = req.body.body;
    id = req.body.id;
    parentID = req.body.parentID;
    username = req.body.username;
    userID = req.body.userID;
    createdAt = req.body.createdAt;
    mysql.getConnection((err, connection) => {
        if(err) throw err;
        console.log('connected as id ' + connection.threadId);
        connection.query('INSERT INTO comments (id, body,username,userID,parentID,createdAt) VALUES (?,?,?,?,?,?);' ,[id,body,username,userID,parentID, createdAt], (err, results,fields) => {
            connection.release(); // return the connection to pool
            if(err) throw err;
            var rows = JSON.parse(JSON.stringify(results));
            console.log('The data from users table are: \n', rows );
        });
    });
    res.send('Check console log please.');
}

// POST 0.0.0.0:3001/recipes/updatecomment w/ request body {body:"abc", id = "123", parentID = '234', ...}
exports.updateComment = function (req, res, next) {
    body = req.body.body;
    id = req.body.id;
    parentID = req.body.parentID;
    username = req.body.username;
    userID = req.body.userID;
    createdAt = req.body.createdAt;
    mysql.getConnection((err, connection) => {
        if(err) throw err;
        console.log('connected as id ' + connection.threadId);
        connection.query('UPDATE comments SET body = ? ,username = ? ,userID = ?,parentID = ?,createdAt = ? WHERE id = ?;' ,[body,username,userID,parentID, createdAt, id], (err, results,fields) => {
            connection.release(); // return the connection to pool
            if(err) throw err;
            var rows = JSON.parse(JSON.stringify(results));
            console.log('The data from users table are: \n', rows );
        });
    });
    res.send('Check console log please.');
}

// POST 0.0.0.0:3001/recipes/deletecomment w/ request body {id="1323"}
exports.deleteComment = function (req, res, next) {
    var id = req.body.id;
    mysql.getConnection((err, connection) => {
        if(err) throw err;
        console.log('connected as id ' + connection.threadId);
        connection.query('DELETE FROM comments WHERE id = ?;' ,[id], (err, results,fields) => {
            connection.release(); // return the connection to pool
            if(err) throw err;
            var rows = JSON.parse(JSON.stringify(results));
            console.log('The data from users table are: \n', rows );
        });
    });
    res.send('Check console log please.');
}
