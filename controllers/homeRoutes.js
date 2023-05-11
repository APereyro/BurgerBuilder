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

router.get("/mine", async (req, res) => {

  console.log("PARAM: ", req.session);

  const { user_id } = req.session

  try {
    // const userId = req.query;
    const burgerData = await Burger.findAll({
      where: {
        user_id: user_id
      }
    });
    console.log(burgerData.map(burger => burger.toJSON()));
    // res.json(burgerData);
    res.render('mine', {
      burger: burgerData.map(burger => burger.toJSON())
    });
    

  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
})

module.exports = router;