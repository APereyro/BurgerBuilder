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

Ingredient.sync()
.then((result) => {
    console.log(result, "synchronized");
})
.catch((err) => {
    console.log("DB Sync Error: ", err)
}
);

module.exports = Ingredient;