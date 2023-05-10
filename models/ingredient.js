const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Ingredient extends Model {}

Ingredient.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  }},
  {
    sequelize,
    timestamps: false,
  } 
  
);


module.exports = Ingredient;