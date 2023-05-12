const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Favorite extends Model {}

Favorite.init({}, { sequelize, timestamps: true });

Favorite.sync()
  .then((result) => {
    console.log(result, "synchronized");
  })
  .catch((err) => {
    console.log("DB Sync Error: ", err);
  });

module.exports = Favorite;
