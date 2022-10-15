var express = require('express');
var router = express.Router();
var recipes_controller = require('../controllers/recipes_controller');

router.get('/', recipes_controller.getAll);

router.get('/images/:id', recipes_controller.getOneImage);


router.post('/search/ingredients', recipes_controller.searchIngredients);
// router.get('/search/ingredients', recipes_controller.searchIngredients);



router.post('/search/recipes', recipes_controller.searchRecipes);

router.post('/search/rfi', recipes_controller.postRFI);

router.get('/search/rfi/:ings', recipes_controller.getRFI);

router.get('/comments', recipes_controller.getComments);

router.post('/insertcomment',recipes_controller.insertComment);

router.post('/updatecomment',recipes_controller.updateComment);

router.post('/deletecomment',recipes_controller.deleteComment);

router.get('/:id', recipes_controller.getOne);

module.exports = router;
