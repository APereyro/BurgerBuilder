const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class BurgerIngredient extends Model {}

BurgerIngredient.init({},{
    sequelize,
    timestamps: true,
  });
  

  BurgerIngredient.sync()
  .then((result) => {
      console.log(result, "synchronized");
  })
  .catch((err) => {
      console.log("DB Sync Error: ", err)
  }
  );


module.exports = BurgerIngredient;