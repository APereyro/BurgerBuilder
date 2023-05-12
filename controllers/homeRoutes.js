const router = require("express").Router();
const { User, Ingredient, Burger, Favorite } = require("../models");
// const withAuth = require('../utils/auth');

router.get("/", async (req, res) => {console.log("Session: ", req.session);

  res.render("homepage", { user: req.session.logged_in  });
});

router.get("/signup", async (req, res) => {
  res.render("signup",  { user: req.session.logged_in  });
});

router.get("/signout", async (req, res) => {
  req.session.destroy();
  res.redirect("/");
});

router.get("/ingredients", async (req, res) => {
  res.render("ingredients",  { user: req.session.logged_in  });
});

router.get("/update/:id", async (req, res) => {
  const burgerId = req.params.id;
  try {
    const burgerData = await Burger.findByPk(burgerId, {});
    const burger = burgerData.get({ plain: true });
    res.render("update", {
      ...burger,
      user: req.session.logged_in  
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/results", async (req, res) => {
  try {
    const burgerData = await Burger.findAll();
    const burgers = burgerData.map((burger) => burger.dataValues);
    console.log("session", req.session);
    res.render("results", { burger: burgers, user: req.session.logged_in });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/profile", async (req, res) => {
  try {
    const burgerData = await Burger.findAll();
    const burgers = burgerData.map((burger) => burger.dataValues);
    res.render("profile", { burger: burgers, user: req.session.logged_in  });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// router.get("/favorites", async (req, res) => {
//   try {
//     const favoritesData = await Favorite.findAll();
//     const favorites = favoritesData.map((favorite) => favorite.dataValues);
//     res.render("favorites", { favorites });

//favorites page route sending all favorite burgers based on users favorite list
router.get("/favorites", async (req, res) => {
  try {
    //find all favorite burger id
    const UserFavorite = await Favorite.findAll({
      where: {
        userId: req.session.user_id,
      },
      raw: true,
    });
    //map over to create an array of burger id's that are fav by user
    const burgerFavorites = UserFavorite.map((fav) => fav.BurgerId);
    //find all burgers where id matches that array of burgers
    const burgerArray = await Burger.findAll({
      where: {
        id: burgerFavorites,
      },
      raw: true,
    });
    //render page with all burger info.
    res.render("favorites", { favorites: burgerArray,  user: req.session.logged_in   });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/mine", async (req, res) => {
  console.log("PARAM: ", req.session);

  const { user_id } = req.session;

  try {
    // const userId = req.query;
    const burgerData = await Burger.findAll({
      where: {
        user_id: user_id,
      },
    });
    console.log(burgerData.map((burger) => burger.toJSON()));
    // res.json(burgerData);
    res.render("mine", {
      burger: burgerData.map((burger) => burger.toJSON()),
      user: req.session.logged_in
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
