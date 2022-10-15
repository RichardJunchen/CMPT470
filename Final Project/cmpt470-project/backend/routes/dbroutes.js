var express = require('express');
var router = express.Router();
var db_controller = require('../controllers/db_controller');

router.get('/', (req,res) => {
    // console.log(req.body);
    res.send('ok reg works');
});

router.get('/inserttable', db_controller.insertFreshTable);

router.get('/insertdb', db_controller.insertFreshDB);

router.get('/insertings',db_controller.insertIngs);

router.get('/insertrfi',db_controller.insertRFI);

module.exports = router;
