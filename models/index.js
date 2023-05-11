const Burger = require("./burger");
const Favorite = require("./favorite");
const Ingredient = require("./ingredient");
const User = require("./user");
const BurgerIngredient = require("./burgerIngredient");

// User-Burger association

Burger.belongsTo(User, {
    foreignKey: "user_id",
  });
  
  User.hasMany(Burger, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
  });
  
// Burger-Ingredient association
Burger.belongsToMany(Ingredient, { through: BurgerIngredient });
Ingredient.belongsToMany(Burger, { through: BurgerIngredient });

// Favorite association
Favorite.belongsTo(User);
Favorite.belongsTo(Burger);



module.exports = { User, Burger, Ingredient, Favorite, BurgerIngredient };
