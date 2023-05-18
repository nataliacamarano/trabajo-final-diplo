var express = require('express');
var router = express.Router();
var cloudinary = require("cloudinary").v2;

var recipeModel = require('../models/recipeModel');

/* GET home page. */
router.get('/', async function(req, res, next) {
    var recipes = await recipeModel.getRecipes();

    recipes = recipes.map(recipe => {
        if(recipe.img_id){
            const imagen = cloudinary.url(recipe.img_id, {
                width: 500,
                height: 300,
                crop: 'fill'
                });
                return {
                    ...recipe,
                    imagen
                }
        }else{
            return {
                ...recipe,
                imagen: ''
            }
        }
    });


    res.json({recipes});
});

module.exports = router;