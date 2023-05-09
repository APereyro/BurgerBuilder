const sequelize = require("../config/connection");
const { User, Burger, Ingredient, Favorite } = require("../models");

const userData = require("./userData");
const burgerData = require("./burgerData");
const favoriteData = require("./commentData");
const ingredientData = require('./ingredientData')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  await Burger.bulkCreate(burgerData);
  await Ingredient.bulkCreate(ingredientData);
  await Favorite.bulkCreate(favoriteData);

  console.log("All models were synched successfully");

  process.exit(0);
};

seedDatabase();