const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const { User } = require('../models')
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
    ingredients:{
    type: DataTypes.STRING,
    allowNull:true,
    },
    image: {
      type: DataTypes.STRING,
      defaultValue:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuyfkEcpJg3G6mokY4k5SzOXBGgDA_M4L1bw&usqp=CAU",
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model : "users",
        key: "id"
      }
    }
  }, {
    sequelize,
    timestamps: true,
  });
  

  Burger.sync()
  .then((result) => {
      console.log(result, "synchronized");
  })
  .catch((err) => {
      console.log("DB Sync Error: ", err)
  }
  );


module.exports = Burger;