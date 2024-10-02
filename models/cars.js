
const { DataTypes } = require('sequelize');
const sequelize = require('../db/conn');

const Car = sequelize.define('car', {
   brand: {
      type: DataTypes.STRING,
      allowNull: false
   },
   model: {
      type: DataTypes.STRING,
      allowNull: false
   },
   year: {
      type: DataTypes.INTEGER,
      allowNull: false
   }
});



module.exports = Car;