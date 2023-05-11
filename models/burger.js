const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Burger extends Model {}

Burger.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    recipe: {
      type: DataTypes.STRING,
      allowNull:true,
    },
    image: {
      type: DataTypes.STRING,
      defaultValue:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuyfkEcpJg3G6mokY4k5SzOXBGgDA_M4L1bw&usqp=CAU",
    },
    ingredients:{
      type: DataTypes.STRING,
      allowNull:true,
      }
  }, {
    sequelize,
    timestamps: true,
  });
  


module.exports = Burger;