var express = require('express');
var router = express.Router();

var recipeModel = require('../models/recipeModel');

/* GET home page. */
router.get('/', async function(req, res, next) {
    var recipes = await recipeModel.getRecipes();

    recipes = recipes.map(novedad => {
        if(novedad.img_id){
            const imagen = cloudinary.url(novedad.img_id, {
                width: 500,
                height: 300,
                crop: 'fill'
                });
                return {
                    ...novedad,
                    imagen
                }
        }else{
            return {
                ...novedad,
                imagen: ''
            }
        }
    });


    res.json({recipes});
});

module.exports = router;