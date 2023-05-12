const router = require("express").Router();
const session = require("express-session");
const { User, Favorite } = require("../../models");

// router.get("/", async (req,res) => {
//     res.send("hello")
// })

router.post("/makerecipe", async (req, res) => {
  console.log(req.body);
});

router.post("/", async (req, res) => {
  console.log(req.body);
  try {
    const userData = await User.create(req.body);
    console.log(userData);
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

    router.post('/login', async (req, res) => {
      try {
        const userData = await User.findOne({ where: { email: req.body.email } });

        if (!userData) {
          res
            .status(400)
            .json({ message: 'Incorrect email or password, please try again' });
          return;
        }
    
        const validPassword = await userData.checkPassword(req.body.password);
    
        if (!validPassword) {
          res
            .status(400)
            .json({ message: 'Incorrect email or password, please try again' });
          return;
        }
    
        req.session.save(() => {
          req.session.user_id = userData.id;
          req.session.logged_in = true;
          
          res.json({ user: userData, message: 'You are now logged in!' });
        });
  } catch (err) {
    res.status(400).json(err);
  }
});

//favorites route for creating new entry into favorites table. We get burger id from fetch from results.js
router.post("/favorite", async (req, res) => {
  try {
    //checking for duplicate favorites
    const burgerNumber = req.body.burgerId 
    const pastFavorite = await Favorite.findAll({
      where: { userId: req.session.user_id },
      attributes: ["BurgerId"],
      raw: true,
    });

    let isNew = true;
    pastFavorite.forEach(burger=>{
      if(burger.BurgerId == burgerNumber ){
        isNew = false
      }
    })
    console.log(isNew);
    
    console.log(burgerNumber);

    if (!isNew) {
      res.status(400).json({ message: 0 });
    } else {
      const favoriteObject = {
        userId: req.session.user_id,
        BurgerId: req.body.burgerId,
      };
      const favoriteIsTrue = await Favorite.create(favoriteObject);
      console.log(favoriteIsTrue);
      if (!favoriteIsTrue) {
        res.status(400);
      } else {
        res.status(200).json({ message: 1 });
      }
    }
    // creating object to create with user id from session and burger id from results.js
    console.log(req.body);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
