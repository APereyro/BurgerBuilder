const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Favorite extends Model {}

Favorite.init({},{sequelize,
    timestamps: true,}

  
);


module.exports = Favorite;