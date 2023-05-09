const  Burger = require('./burger')
const Favorite = require('./favorite')
const Ingredient = require('./ingredient')
const User = require('./user')
const BurgerIngredient = require('./burgerIngredient')

// User-Burger association
User.hasMany(Burger);
Burger.belongsTo(User);

// Burger-Ingredient association
Burger.belongsToMany(Ingredient, { through: BurgerIngredient });
Ingredient.belongsToMany(Burger, { through: BurgerIngredient });

// Favorite association
Favorite.belongsTo(User);
Favorite.belongsTo(Burger);


module.exports = {User,Burger,Ingredient,Favorite, BurgerIngredient}
