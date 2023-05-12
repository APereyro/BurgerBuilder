const router = require("express").Router();
const { Burger, User, Favorite } = require("../../models");
// const withAuth = require('../../utils/auth');

router.post("/", async (req, res) => {
  const { user_id } = req.session;

  console.log("USER ID: ", user_id);

  const data = {
    ...req.body,
    user_id: user_id,
  };

  console.log("DAT: ", data);

  try {
    const create = await Burger.create(data);
    console.log(create.toJSON());
    res.status(200).json({message:1});
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

router.put("/:id", async (req, res) => {
  const { user_id } = req.session;
  const { name, description, ingredients } = req.body;
  const id = req.params.id; // retrieve id from params

  try {
    const burger = await Burger.findOne({
      where: { id: id, user_id: user_id },
    });
    if (!burger) {
      res.status(404).json({ message: "Burger not found" });
      return;
    }

    await Burger.update(
      {
        name: name || burger.name,
        description: description || burger.description,
        ingredients: ingredients || burger.ingredients,
      },
      {
        where: { id: id, user_id: user_id },
      }
    );

    console.log(burger.toJSON());
    // res.render('mine');
    res.json(burger.toJSON());
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const burgerData = await Burger.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!burgerData) {
      res.status(404).json({ message: "No burger found with this id!" });
      return;
    }

    res.status(200).json(burgerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/fav/:id", async (req, res) => {
  try {
    const burgerData = await Favorite.destroy({
      where: {
        userId: req.session.user_id,
        BurgerId: req.params.id,
      },
    });

    if (!burgerData) {
      res.status(404).json({ message: "No favorite found with this id!" });
      return;
    }

    res.status(200).json(burgerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
