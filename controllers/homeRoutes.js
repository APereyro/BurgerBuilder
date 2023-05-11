const router = require('express').Router();
const { User, Ingredient, Burger, Favorite } = require('../models');
// const withAuth = require('../utils/auth');

router.get('/',async (req,res) => {
  res.render("homepage")
})

router.get('/signup', async (req,res) =>{
    res.render("signup")
})

router.get('/ingredients', async (req,res) =>{
  res.render("ingredients")
});

router.get('/results', async (req, res) => {
  try {
    const burgerData = await Burger.findAll();
    const burgers = burgerData.map(burger => burger.dataValues);
    res.render('results', { burger: burgers });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.get('/profile', async (req, res) => {
  try {
    const burgerData = await Burger.findAll();
    const burgers = burgerData.map(burger => burger.dataValues);
    res.render('profile', { burger: burgers });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.get('/favorites', async (req, res) => {
  try {
    const favoritesData = await Favorite.findAll();
    const favorites = favoritesData.map(favorite => favorite.dataValues);
    res.render('favorites', { favorites });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;