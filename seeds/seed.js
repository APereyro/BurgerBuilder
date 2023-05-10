const sequelize = require("../config/connection");
const { User, Burger, Ingredient, Favorite, BurgerIngredient } = require("../models");

const userData = require("./userData");
const burgerData = require("./burgerData");
const favoriteData = require("./favoriteData");
const ingredientData = require('./ingredientData.json')
const burgerIngredientData = require('./burgerIngredientData')
const seedDatabase = async () => {
  try {
    // Test the database connection
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");

    // Synchronize the models
    await sequelize.sync({ force: true });
    console.log("All models were synched successfully");

    // Create the seed data
    const users = await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });
    console.log(`Created ${users.length} users`);

    const burgers = await Burger.bulkCreate(burgerData);
    console.log(`Created ${burgers.length} burgers`);

    const ingredients = await Ingredient.bulkCreate(ingredientData);
    console.log(`Created ${ingredients.length} ingredients`);

    const favorites = await Favorite.bulkCreate(favoriteData);
    console.log(`Created ${favorites.length} favorites`);

    const burgerIngredients = await BurgerIngredient.bulkCreate(burgerIngredientData);
    console.log(`Created ${burgerIngredients.length} burger ingredients`);

    // Exit the process
    process.exit(0);
  } catch (error) {
    // Handle any errors that occur during seeding
    console.error("Error seeding the database:", error);
    process.exit(1);
  }
};

// Call the seeding function
seedDatabase();