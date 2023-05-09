const sequelize = require("../config/connection");
const { User, Burger, Ingredient, Favorite, BurgerIngredient } = require("../models");

const userData = require("./userData");
const burgerData = require("./burgerData");
const favoriteData = require("./favoriteData");
const ingredientData = require('./ingredientData')
const burgerIngredientData = require('./burgerIngredientData')
const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  await Burger.bulkCreate(burgerData);
  await Ingredient.bulkCreate(ingredientData);
  await Favorite.bulkCreate(favoriteData);
  await BurgerIngredient.bulkCreate(burgerIngredientData)

  console.log("All models were synched successfully");

  process.exit(0);
};

seedDatabase();