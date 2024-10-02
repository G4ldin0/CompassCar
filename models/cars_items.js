const { DataTypes } = require('sequelize');
const sequelize = require('../db/conn');
const cars = require('./cars');


const cars_items = sequelize.define('cars_items', {
   name: {
      type: DataTypes.STRING,
      allowNull: false
   }
});

cars_items.belongsTo(cars, {
   foreignKey: {
      allowNull: false
   }
});
cars.hasMany(cars_items);

module.exports = cars_items;