const router = require('express').Router();
const { Project, User, Ingredient} = require('../models');
// const withAuth = require('../utils/auth');

router.get('/',async (req,res) => {
  res.render("homepage")
})

router.get('/signup', async (req,res) =>{
    res.render("signup")
})

router.get('/ingredients', async (req,res) =>{
  const ingredientData = await Ingredient.findAll()
// Extract the names of the ingredients
const ingredientNames = ingredientData.map(ingredient => ingredient.dataValues.name);

console.log(ingredientNames);  // Log the ingredient names
  res.render("ingredients",{
    ingredients: ingredientNames
  })
})

module.exports = router;