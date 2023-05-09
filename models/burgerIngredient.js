const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class BurgerIngredient extends Model {}

BurgerIngredient.init({},{
    sequelize,
    timestamps: true,
  });
  


module.exports = BurgerIngredient;