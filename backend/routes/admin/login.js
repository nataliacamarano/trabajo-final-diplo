var express = require("express");
var router = express.Router();

var usuarioModel = require("../../models/usuarioModel");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("admin/login", {
    layout: "admin/layout",
  });
});

/* POST login */
router.post("/", async (req, res, next) => {
  try {
    var usuario = req.body.usuario;
    var password = req.body.password;

    var data = await usuarioModel.getUserByUsernameAndPassword(
      usuario,
      password
    );

    console.log("Usuario: ", data);
    if (data != undefined) {
      req.session.id_usuario = data.id;
      req.session.usuario = data.usuario;
      res.redirect("/admin/recipes");
    } else {
      res.render("admin/login", {
        layout: "admin/layout",
        error: true,
      });
    }
  } catch (error) {
    console.log(error);
  }
});

/* GET logout */
router.get("/logout", function (req, res, next) {
  req.session.destroy();
  res.render("admin/login", {
    layout: "admin/layout",
  });
});

module.exports = router;
