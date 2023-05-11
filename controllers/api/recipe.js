const router = require('express').Router();
const { Burger } = require('../../models');

router.post("/", async (req,res) => {
    console.log(req.body);
    try {
      const create = await Burger.create(req.body);
      console.log(create);
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  })

module.exports = router;