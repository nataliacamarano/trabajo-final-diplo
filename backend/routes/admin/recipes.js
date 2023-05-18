var express = require("express");
var router = express.Router();
var util = require("util");
var cloudinary = require("cloudinary").v2;
var recipeModel = require("../../models/recipeModel");

const uploader = util.promisify(cloudinary.uploader.upload);

router.get("/", async function (req, res, next) {
  var recipes = await recipeModel.getRecipes();

  recipes = recipes.map(recipe => {
    if (recipe.img_id) {
      const imagen = cloudinary.image(recipe.img_id, {
        width: 320,
        height: 200,
        crop: "fill",
      });
      return {
        ...recipe,
        imagen,
      };
    } else {
      return {
        ...recipe,
        imagen: "",
      };
    }
  });

  res.render("admin/recipes", {
    layout: "admin/layout",
    usuario: req.session.usuario,
    recipes,
  });
});

router.get("/agregar", (req, res, next) => {
  res.render("admin/agregar", {
    layout: "admin/layout",
  });
});

router.post("/agregar", async (req, res, next) => {
  try {
    var img_id = "";
    console.log(req.files);
    if (req.files && Object.keys(req.files).length > 0) {
      imagen = req.files.imagen;
      img_id = (await uploader(imagen.tempFilePath)).public_id;
    }

    const { titulo, subtitulo, cuerpo } = req.body;

    if (titulo != "" && subtitulo != "" && cuerpo != "") {
      await recipeModel.insertRecipe({ ...req.body, img_id });
      res.redirect("/admin/recipes");
    } else {
      res.render("admin/agregar", {
        layout: "admin/layout",
        error: true,
        message: "Todos los campos son requeridos",
      });
    }
  } catch (error) {
    console.log(error);
    res.render("admin/agregar", {
      layout: "admin/layout",
      error: true,
      message: "No se cargo la receta",
    });
  }
});

router.get("/modificar/:id", async (req, res, next) => {
  var id = req.params.id;
  var recipe = await recipeModel.getRecipeById(id);
  res.render("admin/modificar", {
    layout: "admin/layout",
    recipe,
  });
});

const destroy = util.promisify(cloudinary.uploader.destroy);

router.post("/modificar", async (req, res, next) => {
  try {
    var img_id = req.body.img_original;
    var borrar_img_vieja = false;

    if (req.body.img_delete === "1") {
      img_id = null;
      borrar_img_vieja = true;
    } else {
      if (req.files && Object.keys(req.files).length > 0) {
        imagen = req.files.imagen;
        img_id = (await uploader(imagen.tempFilePath)).public_id;
        borrar_img_vieja = true;
      }
    }

    if (borrar_img_vieja && req.body.img_original) {
      await destroy(req.body.img_original);
    }

    var obj = {
      titulo: req.body.titulo,
      subtitulo: req.body.subtitulo,
      cuerpo: req.body.cuerpo,
      img_id,
    };

    await recipeModel.modificarRecipeById(obj, req.body.id);
    res.redirect("/admin/recipes");
  } catch (error) {
    console.log(error);
    res.render("admin/modificar", {
      layout: "admin/layout",
      error: true,
      message: "No se modifico la receta",
    });
  }
});

router.get("/eliminar/:id", async (req, res, next) => {
  var id = req.params.id;

  let recipe = await recipeModel.getRecipeById(id);
  if (recipe.img_id) {
    await destroy(recipe.img_id);
  }

  await recipeModel.deleteRecipeById(id);
  res.redirect("/admin/recipes");
});

module.exports = router;
