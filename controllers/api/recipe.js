const router = require('express').Router();
const { Burger, User } = require('../../models');

router.post("/", async (req,res) => {
    const { user_id } = req.session;

    console.log("USER ID: ", user_id);

    const data = {
      ...req.body,
      user_id: user_id
      
    }

    console.log("DAT: ", data);

    try {
      const create = await Burger.create(data);
      console.log(create);
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  })

  router.get("/getMine", async (req, res) => {
    console.log("IM HIT");
    console.log(req.query);
    try {
      const userId = req.query;
      const burgerData = await Burger.findAll({
        where: {
          user_id: userId
        }
      });
      console.log(burgerData);
      res.json(burgerData);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  })

module.exports = router;