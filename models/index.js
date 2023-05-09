const  Burger = require('./burger')
const Favorite = require('./favorite')
const Ingredient = require('./ingredient')
const User = require('./user')

// User-Burger association
User.hasMany(Burger);
Burger.belongsTo(User);

// Burger-Ingredient association
Burger.belongsToMany(Ingredient, { through: 'BurgerIngredients' });
Ingredient.belongsToMany(Burger, { through: 'BurgerIngredients' });

// Favorite association
Favorite.belongsTo(User);
Favorite.belongsTo(Burger);


module.exports = {User,Burger,Ingredient,Favorite}
