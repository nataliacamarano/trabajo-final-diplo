var pool = require("./db");

async function getRecipes() {
  var query = "select * from recipes";
  var rows = await pool.query(query);

  return rows;
}

async function insertRecipe(obj) {
  try {
    console.log(obj);
    var query = "insert into recipes set ?";
    var rows = await pool.query(query, [obj]);
    return rows;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function getRecipeById(id) {
  var query = "select * from recipes where id = ?";
  var rows = await pool.query(query, [id]);
  return rows[0];
}

async function modificarRecipeById(obj, id) {
  try {
    var query = "update recipes set ? where id = ?";
    var rows = await pool.query(query, [obj, id]);
    return rows;
  } catch (error) {
    throw error;
  }
}

async function deleteRecipeById(id) {
  var query = "delete from recipes where id = ?";
  var rows = await pool.query(query, [id]);
  return rows;
}

module.exports = {
  getRecipes,
  insertRecipe,
  deleteRecipeById,
  getRecipeById,
  modificarRecipeById,
};
