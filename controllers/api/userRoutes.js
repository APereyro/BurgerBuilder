const router = require('express').Router();
const { User, Favorite } = require('../../models')

// router.get("/", async (req,res) => {
//     res.send("hello")
// })

router.post("/makerecipe", async (req,res) => {
  console.log(req.body);
})

router.post("/", async (req,res) => {
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
    router.post('/favorite', async (req, res) => {
      try {
          //creating object to create with user id from session and burger id from results.js
          console.log(req.body)
        const favoriteObject = {
          "userId":req.session.user_id,
          "BurgerId":req.body.burgerId
        };
        const favoriteIsTrue =await Favorite.create(favoriteObject);
        console.log(favoriteIsTrue);
        if(!favoriteIsTrue){
          res.status(400)
        }else{
          res.status(200)
        }
      } catch (err) {
        res.status(400).json(err);
      }
    });

    

module.exports = router;
